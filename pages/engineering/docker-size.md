---
title: Giảm kích thước Docker image cho ứng dụng Ruby on Rails
date: 2020/1/4
description: 'Việc giảm dung lượng Docker image tuân theo nguyên tắc cơ bản nhất chính là loại bỏ các thành phần không cần thiết trong Docker image'
tag: engineering
author: Loi Nguyen
---

# Giảm kích thước Docker image cho ứng dụng Ruby on Rails

![Docker](/images/engineering/docker-size/docker.png)

Việc giảm dung lượng Docker image tuân theo nguyên tắc cơ bản nhất chính là loại bỏ các thành phần không cần thiết trong Docker image.
Điều này có thể đạt được dựa vào các thủ thuật sau:

- Dùng image base nhỏ: alpine, slim.
- Multiple stages build.
- Xóa các file ko cần thiết
- Dùng Dockerignore.
- Giảm số lượng layer.

Để đọc bài này các bạn cần?

- Biết Docker là gì và dùng để làm gì.
- Biết và đã từng viết Dockerfile, build Docker images.
- Biết và từng làm việc với Ruby on Rails.

## Vấn đề của Docker images quá nặng

### Câu chuyện của mình

Thời gian trước, mình có nhận một project, server đặt ở Trung Quốc. Mạng mẽo Mẫu Quốc như mọi người đều biết, rất chậm khi đi qua đường truyền quốc tế, đến cả Google, Facebook đều hầu như không sử dụng được. Code và CI server (CI server là server để thực hiện quá trình build Docker image từ code) thì đặt ở Mỹ (vì đơn giản bọn mình dùng Cloud provider, Git remote server ở đấy). Push một Docker image 400 MB qua Trung Quốc trung bình mất hết 40 phút. Thỉnh thoảng thì hơn 1 giờ. Có khi đang push giữa chừng thì bị disconnect luôn.

Docker image quá lớn sẽ:

- Tốn thời gian upload.
- Tốn băng thông mạng. Cái này nguy hiểm nếu bạn sử dụng đường mạng riêng, trả tiền theo lưu lượng.
- Tốn tiền lưu trữ image trên repository.
- Ứng dụng trở nên cồng kềnh, thời gian pull image sẽ lâu.

Nói chung là vừa tốn tiền vừa ảnh hưởng tới tốc độ release sản phẩm. Các bạn thử nghĩ xem, nếu các bạn chỉ muốn đổi chỗ 1 button trên qua phải 1 pixel, mà bạn phải đợi 1 giờ để đưa cho khách hàng xem. :) Mà làm phần mềm thì requirement thay đổi liên tục. Nên mình quyết định tìm cách giảm dung lượng Docker image xuống.

Đây là bài viết hướng dẫn kỹ thuật đầu tiên của mình, cũng chỉ là múa rìu qua mắt thợ nhưng hy vọng nó sẽ giúp cho các bạn fresher, junior giải quyết được vấn đề về Docker image size quá lớn.

### Ví dụ minh họa

Để cho dễ hình dung, mình sẽ lấy một Dockerfile điển hình của Ruby on Rails để làm ví dụ, có thể sẽ thiếu và thừa một chút xíu.

```
# Kế thừa build base là image của ruby:2.5.3 phiên bản đầy đủ, official trên Docker Hub.
FROM ruby:2.5.3

# Chạy hai lệnh apt-get (quản lý package của Ubuntu) để cài nodejs (cần trong quá trình build assets js, css của web), và build-base (build rubygems)
RUN apt-get update
RUN apt-get install -y nodejs build-base

# Thiết lập một số biến môi trường cho Docker container.
ENV RAILS_ENV ${RAILS_ENV}
ENV APP_HOME /code

# Tạo thư mục WORKDIR lấy từ ENV APP_HOME, mặc định ở trên là /code
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# Get dependencies của Rails
ADD Gemfile* $APP_HOME/
RUN bundle install - jobs 4

# Copy hết thư mục hiện tại vào thư mục WORKDIR
ADD . $APP_HOME

# Docker container mở port 3000
EXPOSE 3000

# Command run app
CMD bundle exec puma -C config/puma.rb
```

## Cách giảm dung lượng Docker image

### Kiểm tra dung lượng Docker image

Mình build Dockerfile ở trên, lệnh list docker images sẽ cho ta thấy dung lượng của image ở cột cuối cùng.

```
╰─ docker images | head -2
REPOSITORY       TAG        IMAGE ID       CREATED              SIZE
ntloi            latest     2343d383ebca  About ...ago        1.12GB
```

What? 1.12 GB =))

Để hiểu rõ tại sao lại to như vậy ta dùng lệnh docker history. (Thứ tự các câu lệnh sẽ bị ngược so với Docker file, do các layer stack lên nhau).

```
╰─ docker history ntloi:latest
CREATED BY                                      SIZE
/bin/sh -c #(nop)  CMD ["/bin/sh" "-c" "bund…   0B
/bin/sh -c #(nop)  EXPOSE 3000                  0B
/bin/sh -c #(nop) ADD dir:0c93aceee1fd93e794…   52.3MB
/bin/sh -c bundle install --jobs 4              158MB
...
/bin/sh -c apt-get install -y nodejs --no-in…   16.5MB
/bin/sh -c apt-get update                       16.4MB
...
/bin/sh -c set -ex   && buildDeps='   bison …   37.7MB
...
/bin/sh -c mkdir -p /usr/local/etc  && {   e…   45B
/bin/sh -c set -ex;  apt-get update;  apt-ge…   562MB
/bin/sh -c apt-get update && apt-get install…   142MB
/bin/sh -c set -ex;  if ! command -v gpg > /…   7.81MB
/bin/sh -c apt-get update && apt-get install…   23.2MB
...
/bin/sh -c #(nop) ADD file:e4bdc12117ee95eaa…   101MB
```

### Dùng alpine image

Rõ ràng là các layer in đậm không phải mình tạo ra. Nó là layer của câu lệnh đầu tiên trong Dockerfile: `FROM ruby:2.5.3` (Gần 900 MB).

Giải quyết vấn đề này ta có thể dùng các images ruby khác nhẹ hơn, nhẹ nhất ở đây là nhóm alpine. Có thể bạn chưa biết alpine là bản phân phối linux nhẹ bậc nhất. Và ruby 2.5.3 cài trên alpine cỡ ~ 22 MB. Nhưng đánh đổi vào đó là bản linux này thiếu thư viện nhiều lắm. Nên muốn compile được hết ruby gem vẫn phải install các thư viện. Tuy nhiên vẫn tiết kiệm được dung lượng rất nhiều. Dockerfile lúc này:

```
FROM ruby:2.5.3-alpine3.8

RUN apk add --update build-base tzdata

ENV RAILS_ENV ${RAILS_ENV}
ENV APP_HOME /code

RUN mkdir $APP_HOME

WORKDIR $APP_HOME

ADD Gemfile* $APP_HOME/
RUN bundle install --jobs 4

ADD . $APP_HOME

EXPOSE 3000

CMD bundle exec puma -C config/puma.rb
```

Sau khi build:

```
╰─ docker images | head -2
REPOSITORY       TAG        IMAGE ID      CREATED              SIZE
ntloi            latest     688dc4bc5a1a  8 seconds ago        398MB
```

### Multi-stage build

Sau khi dùng `ruby-alpine` để build thì ta xem lại docker history. Ta thấy dung lượng image vẫn còn lớn (gần ~400 MB). Nhiều nhất là lệnh:

```
apk add — update build-base tzdata
```

```
╰─ docker history
ntloi:latestCREATED BY                                 SIZE
/bin/sh -c #(nop)  CMD ["/bin/sh" "-c" "bund…          0B
/bin/sh -c #(nop)  EXPOSE 3000                         0B
/bin/sh -c #(nop)  ENV SECRET_KEY_BASE=$(rak…          0B
/bin/sh -c #(nop)  ADD dir:946653e21b282f5a10…         52.3MB
/bin/sh -c bundle install --jobs 4                     145MB
/bin/sh -c apk add --update build-base tzdata          154MB
```

Trong quá trình build app Ruby on Rails các thư viện, phần mềm trong build-base rất cần thiết. Tuy nhiên lúc run app thì các thư viện này không cần thiết nữa. Do đó ta nên tách quá trình build là 2 phần: Prebuild và build nhờ vào [multi-stage build](https://docs.docker.com/develop/develop-images/multistage-build/). Ta sẽ giảm được 154 MB của build-base.

### Xóa các files không cần thiết

- Dùng file .dockerignore
- Xóa các file cache và các file C để compile thư viện. Lúc đã biên dịch thư viện Ruby rồi thì khi run app, ta không cần các file này nữa.
- Nếu trong môi trường Production, ta cũng ko nhất thiết cần các file kiểu như README.txt, spec, test,…. Hãy xóa chúng đi. Các thư mục có thể xóa trong môi trường Production bao gồm: spec, node_modules, app/assets, vendor/assets, lib/assets, tmp/cache, app/bin và các file text như README.txt

Dockerfile hoàn thiện.

```
# ----------------------- STAGE 1 PRE-BUILD -----------------
FROM ruby:2.5.3-alpine3.8 AS pre-builder

ENV RAILS_ENV ${RAILS_ENV}
ENV APP_HOME /code ENV BUNDLE_PATH /gems

RUN apk add --update build-base tzdata \
    && mkdir $APP_HOME

WORKDIR $APP_HOME

ADD . $APP_HOME \
    && Gemfile* $APP_HOME/

RUN bundle install --jobs 4

# Xóa các file .o và file .c sau khi đã build xong gem.
# Các bạn có biết Ruby được viết bằng C không hả :))
RUN rm -rf /gems/cache/*.gem  \
    && find /gems/gems/ -name "*.c" -delete \
    && find /gems/gems/ -name "*.o" -delete

# ------------------------ STAGE 2 BUILD --------------------
FROM ruby:2.5.3-alpine3.8

ENV APP_HOME /code
ENV BUNDLE_PATH /gems

RUN apk add --update tzdata
ARG RAILS_ENV=development
ENV RAILS_ENV ${RAILS_ENV}
WORKDIR $APP_HOME

# Copy lại hết những gì đã build từ stage 1.
COPY --from=pre-builder $APP_HOME $APP_HOME \
     && --from=pre-builder $BUNDLE_PATH $BUNDLE_PATH

EXPOSE 3000

CMD bundle exec puma -C config/puma.rb
```

Sau khi build:

```
╰─ docker images | head -2
REPOSITORY       TAG        IMAGE ID      CREATED              SIZE
ntloi        latest     752fa284cb41     About a minute ago   124MB
```

124 MB nhé. File `.dockerignore` tham khảo

```
.env*
.git
.gitignore
.codeclimate.yml
.dockerignore
.gitlab-ci.yml
.hound.yml
.travis.yml
LICENSE.md
README.md
docker-compose.*
Dockerfile
log/*
node_modules/*
public/assets/*
storage/*
public/packs/*
public/packs-test/*
tmp/*
```

## Một số lưu ý khác khi viết Dockerfile

### Tận dụng các layer cache

Chúng ta đều biết Docker image bao gồm nhiều layer xếp chồng lên nhau. Để Docker build nhanh hơn chúng ta nên tận dụng việc cache các layer của các image đã build trước đó. Ta có thể dễ dàng nhìn thấy liệu 1 layer có được cache hay không nhờ vào các dòng log được in ra trong quá trình build.
Nếu một layer nằm ở dưới thay đổi thì các layer ở trên đều phải build mới lại chứ không thể dùng cache. Do đó, ta nên đặt các bước ít thay đổi lên trên đầu Dockerfile để dùng được cache, từ đó tăng tốc độ build Docker image.

### Giảm số lượng layer

Thật ra tới khi tìm hiểu và viết bài thì mình mới biết được điều này. Docker image càng nhiều layer thì càng cồng kềnh (có tăng size, tăng build time không thì mình chưa kiểm chứng). Do đó chúng ta cần phải giảm bớt số lượng layer khi có thể.

Có 3 lệnh tạo ra Docker layer là: **RUN**, **COPY**, **ADD**. Cho nên việc viết như thế này:

```
RUN bundle exec rake assets:clean
RUN bundle exec rake assets:precompile
RUN rm -rf /gems/cache/*.gem
```

Sẽ không tốt bằng viết thế này:

```
RUN bundle exec rake assets:clean \
&& bundle exec rake assets:precompile \
&& rm -rf /gems/cache/*.gem
```

Có một chút lưu ý là việc gom các lệnh này lại sẽ có thể ảnh hưởng đến việc cache layer ở trên. Do chỉ cần 1 trong 3 câu lệnh gộp này thay đổi cũng đồng nghĩa với việc cả 3 lệnh này phải bị chạy lại và ko thể dùng cache. Khi gom lưu ý tí xíu là được.

Hi vọng bài viết hữu ích cho các bạn.

Ref: https://thecode.pub/reduce-your-docker-images-an-example-with-ruby-564735f4388c
