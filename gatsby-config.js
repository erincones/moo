/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/moo`,
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-109544874-2`,
        head: true
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `moo!`,
        short_name: `moo`,
        description: `Another web version of cowsay`,
        lang: `en`,
        start_url: `/`,
        display: `standalone`,
        background_color: `#000000`,
        theme_color: `#000000`,
        icon: `src/images/icon.svg`
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require(`postcss-import`),
          require(`tailwindcss`)(`tailwind.config.js`),
          require(`postcss-preset-env`)({ stage: 1 })
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true
      }
    }
  ],
};
