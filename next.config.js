const withPlugins = require('next-compose-plugins')
const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

module.exports = withPlugins([
  [withNextra],
  {
    images: {
      loader: 'custom'
    }
  }
])
