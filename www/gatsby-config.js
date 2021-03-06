require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Zia Lab créatif",
    description:
      "Compagnie de création en danse, musique et arts multi des artistes Geneviève Duong, chorégraphe interprète, et Pascal Asselin alias Millimetrik, musicien compositeur.",
    siteUrl: "https://www.zialabcreatif.com",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142434544-1",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 100,
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_DEPLOY_STUDIO_TOKEN,
        overlayDrafts: false,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml",
  ],
}
