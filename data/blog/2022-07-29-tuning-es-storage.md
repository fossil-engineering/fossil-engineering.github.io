---
title: Tuning ElasticSearch storage
authors: [khanh]
date: '2022-07-29'
tags: ['engineering', 'data']
summary: Việc tối ưu bộ nhớ cho Database rất quan trọng đối với 1 Data Engineer, sau đây mình sẽ chia sẻ những cách mà Fossil đã sử dụng để tối ưu bộ nhớ cho ElasticSearch
layout: PostLayout
---

**Chúng tôi đã điều chỉnh bộ nhớ (tuning storage) cho cụm Elasticsearch như thế nào?**

Bối cảnh

Fossil Việt Nam là một R&D Center cho nên logs là một phần rất quan trọng. Cho nên logs cần được truy xuất nhanh để đáp ứng những nhu cầu như debug hardware, QA test cũng như CS team có thể kiểm tra log để giúp đỡ user trong lúc sử dụng app, ... Trước đây, logs sau khi ETL thì được lưu ở S3 và sau đó sử dụng Athena để truy xuất, vấn đề xuất hiện khi dùng Athena truy xuất càng nhiều thì sẽ tốn chi phí query, cùng với đó với lượng dữ liệu lớn Athena thường cho kết quả khá lâu. Với những yêu cầu đó chúng tôi lựa chọn Elasticsearch để lưu trữ và trích xuất log.

Elasticsearch không còn quá xa lạ đặc biệt là đối với các Data Engineer trong bài này mình sẽ không nói đến việc Elasticsearch làm việc như thế nào mà mình sẽ đề cập đến một vấn đề khi cài đặt Elasticsearch trên k8s mà tôi đã gặp phải đó là tunning storage cho es cluster. Chúng ta đã biết vì es sẽ index dữ liệu của chúng ta để tăng tốc độ truy xuất cho nên kích thước sẽ tăng đáng kể so với dữ liệu được lưu ở các storage khác như S3 hay GCS và kích thước ở đây lại chính là đĩa ở k8s cho nên chúng ta sẽ phải cân đối các config để vừa đáp ứng với nhu cầu và tốc độ truy xuất dữ liệu. Đối với chúng tôi, dữ liệu ở dạng json, nhu cầu search chính xác giá trị đối với một số fields ví dụ như (userid, testid, …).

Without template

```bash
GET localhost:9200/_cat/indices?v=true&s=index

index                       pri rep docs.count store.size pri.store.size
sdk_log-2022-03-14            1   1     324105    202.2mb        202.2mb
```

Và dưới đây là dẫn chứng cho ta thấy tầm quan trọng của ES template

Đầu tiên chúng ta thay đổi **compression type.** Mặc định LZ4 sẽ được áp dụng, chúng ta có thể áp dụng `best_compression` sử dụng DEFLATE giúp tỉ lệ nén cao hơn nhưng sẽ dẫn tới việc thời gian nén lâu hơn. Vấn đề đó không quan trọng trong bối cảnh chúng ta cần tốc độ truy xuất và tối ưu bộ nhớ.

```bash
PUT localhost:9200/_template/sdk_log

{
    "index_patterns": [
        "sdk_log-*"
    ],
    "settings": {
        "codec": "best_compression",
        "merge.policy.max_merged_segment": "5mb"
    }
}
```

~13% bộ nhớ được thu nhỏ khi dùng `best_compression`

```bash
GET localhost:9200/_cat/indices?v=true&s=index

index                                pri rep docs.count store.size pri.store.size
sdk_log_best_compression-2022-03-14    1   1     324105    175.4mb        175.4mb

```

Tiếp theo ta cần đi sâu một chút tìm hiểu khái niệm **Mapping**. Mapping là một quy trình để định nghĩa một bản ghi và cách mà các fields sẽ được quản lý, lưu trữ và lập chỉ mục. Vì vậy với mỗi mapping khác nhau sẽ dẫn đến không gian lưu trữ và hiệu suất khác nhau.

Sau đây là 3 tham số mình đã dùng để tối ưu bộ nhớ.

**Field data types**

[https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html#mapping-types](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html#mapping-types)

Mỗi field sẽ có một _field data type_ nó chỉ ra loại dữ liệu của field đó. Kiểu dữ liệu chúng ta dùng nhiều nhất với Elasticsearch là kiểu chuỗi (string) nên chúng ta cần hiểu rõ hai loại **text** và **keyword**. Với text field dữ liệu sẽ được phân tích để đáp ứng nhu cầu full-text search trong khi với keyword dữ liệu được giữ nguyên để đáp ứng việc sắp xếp và lọc dữ liệu. Vậy nên tùy vào nhu cầu truy xuất bạn hãy chọn kiểu dữ liệu cho các field một cách hợp lý, theo mình hạn chế dùng text file những field cho nhu cầu tìm kiếm gần đúng như title, content, … ta nên dùng text field, còn lại những field yêu cầu tìm kiếm chính xác match 100% chúng ta sẽ dùng keyword.

Các field types được nhóm lại theo _family_. Các loại dữ liệu cùng _family_ sẽ có phương thức truy xuất hoàn toàn giống nhau nhưng sẽ có sự khác nhau về không gian lưu trữ và hiệu suất.

Ví dụ chúng ta config kiểu dữ liệu cho trường dữ liệu brand.

```bash
PUT localhost:9200/_template/sdk_log

{
    "index_patterns": [
        "sdk_log-*"
    ],
    "settings": {
        "codec": "best_compression",
        "merge.policy.max_merged_segment": "5mb"
    },
    "mappings": {
        "properties": {
            },
            "brand": {
                "type": "text"
            },
        }
    }
}
```

**doc_values**

[https://www.elastic.co/guide/en/elasticsearch/reference/8.1/doc-values.html](https://www.elastic.co/guide/en/elasticsearch/reference/8.1/doc-values.html)

Doc values là một kiểu dữ liệu trên đĩa (the on-disk data structure). Phần lớn các fields sẽ được mặc định lập chỉ mục (indexed) giúp chúng có thể tìm kiếm (searchable). [Numeric types](https://www.elastic.co/guide/en/elasticsearch/reference/8.1/number.html), [date types](https://www.elastic.co/guide/en/elasticsearch/reference/8.1/date.html), [boolean type](https://www.elastic.co/guide/en/elasticsearch/reference/8.1/boolean.html), [ip type](https://www.elastic.co/guide/en/elasticsearch/reference/8.1/ip.html), [geo_point type](https://www.elastic.co/guide/en/elasticsearch/reference/8.1/geo-point.html) và [keyword type](https://www.elastic.co/guide/en/elasticsearch/reference/8.1/keyword.html) vẫn có thể truy xuất khi chúng không được [indexed](https://www.elastic.co/guide/en/elasticsearch/reference/8.1/mapping-index.html) mà chỉ có doc values được bật đó là khái niệm **doc-value-only fileds**. Hiệu suất truy xuất sẽ chậm hơn nhưng chúng ta có thể đánh đổi với không gian lưu trữ trên đĩa trong các trường hợp field đó ít khi được truy suất hoặc tốc độ truy xuất không quan trọng. Ở Fossil, thậm chí khi tốc độ truy xuất được đánh đổi cơ bản nó vẫn nhanh hơn rất nhiều truy xuất trên Athena.

Doc-value-only field có thể config như sau:

```bash
PUT localhost:9200/\_template/sdk_log
{
    "index_patterns": [
        "sdk_log-*"
    ],
    "settings": {
        "codec": "best_compression",
        "merge.policy.max_merged_segment": "5mb"
    },
    "mappings": {
        "properties": {},
        "brand": {
            "type": "text",
            "index": "false"
        },
    }
}
```

Thậm trí nếu bạn không cần tổng hợp, sắp xếp hay thay đổi giá trị của một trường dữ liệu chúng ta có hoàn toàn có thể tắt doc values để tối ưu bộ nhớ.

```bash
PUT localhost:9200/\_template/sdk_log
{
    "index_patterns": [
        "sdk_log-*"
    ],
    "settings": {
        "codec": "best_compression",
        "merge.policy.max_merged_segment": "5mb"
    },
    "mappings": {
        "properties": {},
        "brand": {
            "type": "text",
            "index": "false",
            "doc_values": "false"
        },
    }
}
```

Và chúng ta xem bộ nhớ của chúng ta đã giảm như thế nào:

```bash
GET localhost:9200/_cat/indices?v=true&s=index

index                                pri rep docs.count store.size pri.store.size
sdk_log-disable_doc_values-2022-03-14  1   1     324105     82.9mb         82.9mb
```

~60% dung lượng bộ nhớ được tối ưu

**norms**

Norms lưu trữ các yếu tố chuẩn hóa khác nhau giúp ích cho việc tại thời điểm truy vấn có thể tính điểm dữ liệu khi truy vấn. Mặc dù hữu ích cho việc tính điểm, đáp ứng nhu cầu cho việc tìm kiếm gần đúng nhưng norms cần khá nhiều không gian trên đĩa. Vì vậy đối với những trường không có nhu cấu trên chúng ta có thể tắt norms như sau:

```bash
PUT localhost:9200/\_template/sdk_log
{
    "index_patterns": [
        "sdk_log-*"
    ],
    "settings": {
        "codec": "best_compression",
        "merge.policy.max_merged_segment": "5mb"
    },
    "mappings": {
        "properties": {},
        "brand": {
            "type": "text",
            "index": "false",
            "doc_values": "false"
            "norms": "false"
        },
    }
}
```

Thêm khoảng ~1% bộ nhớ được tối ưu:

```bash
GET localhost:9200/_cat/indices?v=true&s=index

index                                pri rep docs.count store.size pri.store.size
sdk_log-disable_doc_values-2022-03-14  1   1     324105       80mb         80mb
```
