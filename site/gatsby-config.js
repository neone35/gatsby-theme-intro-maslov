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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-129653361-1", // Google Analytics / GA
          "AW-852024281", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true
        },
      },
    },
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "6569ba54ff45ca7d4785b2a5",
        tawkKey: "1hgifvn3o",
        // get this from the tawk script widget
      },
    }
  ],
}
