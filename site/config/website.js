const ghInspiredColors = require('./gh-inspired.js');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Artur Maslov personal site', // Navigation and Site Title
  siteTitleAlt: 'Artur Maslov', // Alternative Site title for SEO
  siteUrl: 'http://arturmaslov.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo_512.png', // Used for SEO and manifest
  siteDescription: 'Portfolio of web & app developer',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@neonartur', // Twitter Username
  ogSiteName: 'artur.maslov', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: ghInspiredColors.lead,
  backgroundColor: ghInspiredColors.back,
};
