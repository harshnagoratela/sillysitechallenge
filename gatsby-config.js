const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
	title: 'Gatsby Silly Site Challenge',
    description: `Submission for Gatsby Silly Site Challenge`,
    keywords: `digital, agency, cms, gatsby, reactjs, web development`,
    author: `@harshnagoratela`,
	siteUrl: `https://github.com/harshnagoratela/sillysitechallenge`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
};
