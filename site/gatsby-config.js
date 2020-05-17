module.exports = {
  siteMetadata: {
    title: `Kurt Astro`,
    description: `Dylan Cole is a sound designer, composer and dabbles in many creative fields. Hire his ass.`,
    author: `Alex Low`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `hyf310me`,
        dataset: `production`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kurtastro`,
        short_name: `kurtastro`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}
