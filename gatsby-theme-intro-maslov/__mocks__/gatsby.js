const React = require('react')

module.exports = {
  // graphql is a tag in Gatsby; tests should not fail if it's called
  graphql: () => {},
  Link: ({ to, children }) => React.createElement('a', { href: to }, children),
  StaticQuery: () => null,
  useStaticQuery: () => ({ site: { siteMetadata: { description: 'test', locale: 'en', title: 'test' } } }),
  navigate: () => {},
}
