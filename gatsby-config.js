const path = require('path')

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `favorites`,
                path: path.join(__dirname, `src`, `favorites`),
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `illustrations`,
                path: path.join(__dirname, `src`, `illustrations`),
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                typekit: {
                    id: process.env.TYPEKIT_ID,
                },
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-scroll-reveal`,
    ],
}