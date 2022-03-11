const siteMetadata = {
  title: 'Fossil Engineering',
  showTitle: false,
  author: '',
  headerTitle: 'Fossil Engineering',
  description: 'Let the code speak',
  language: 'en-us',
  siteUrl: 'https://fossil-engineering.github.io',
  siteRepo: 'https://github.com/fossil-engineering/fossil-engineering.github.io',
  image: '/static/img/avatar.png',
  socialBanner: '/static/img/twitter-card.png',
  email: 'people@fossil.com',
  github: 'https://github.com/fossil-engineering',
  twitter: '',
  linkedin: 'https://www.linkedin.com/company/fossilvietnamcareers/',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: false, // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: 'G-FP7VNJ2D7M', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // Please add your .env file and modify it according to your selection
    // Default: /api/emailOctopus
    provider: 'https://fossil-engineering-subscribe.duyet.workers.dev',
  },
  comment: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: 'fossil-engineering/fossil-engineering.github.io', // username/repoName
      // Visit the link below, enter your repo in the configuration section and copy the script data parameters
      // Before that you should create a new Github discussions category with the Announcements type so that new discussions can only be created by maintainers and giscus
      // https://giscus.app/
      repositoryId: 'R_kgDOGZLjkg',
      category: '',
      categoryId: '',
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '1',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      repo: '', // username/repoName
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqus: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: '',
    },
  },
}

module.exports = siteMetadata
