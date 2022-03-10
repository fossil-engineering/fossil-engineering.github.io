import { getFileBySlug } from '@/lib/mdx'
import { getAllAuthors } from '@/lib/authors'
import { MDXLayoutRenderer } from '@/components/MDXComponents'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps({ params }) {
  const authorDetails = await getFileBySlug('authors', [params.author])
  return { props: { authorDetails } }
}

export async function getStaticPaths() {
  const authors = await getAllAuthors()

  return {
    paths: Object.keys(authors).map((author) => ({
      params: {
        author,
      },
    })),
    fallback: false,
  }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
