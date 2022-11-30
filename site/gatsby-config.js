const config = require('./config/website');
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    description: config.siteTitle,
    locale: "en",
    title: config.siteTitleAlt,
  },
  plugins: [
    {
      resolve: "@arturthemaslov/gatsby-theme-intro-maslov",
      options: {
        basePath: pathPrefix,
        contentPath: "content/",
        showThemeLogo: false,
        theme: "gh-inspired",
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `fz2wjdoqskdl`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    /* Must be placed at the end */
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1981108,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-129653361-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
}
