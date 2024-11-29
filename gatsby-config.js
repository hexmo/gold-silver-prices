module.exports = {
  siteMetadata: {
    title: "Gold Silver Prices",
    description: "Daily gold, fine gold, and silver prices for Nepal",
    author: "Verisk Nepal",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
  ],
}
