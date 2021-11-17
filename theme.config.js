const YEAR = new Date().getFullYear()

export default {
  titleSuffix: ' - Fossil Engineering',
  cusdis: {
    appId: 'a24f35d3-16f9-43a9-b637-712998af86c1'
  },
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Fossil Engineering Blog.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
