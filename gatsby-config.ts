import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `michaelsimsoe.no`,
    author: {
      name: `Michael Krøyserth-Simsø`,
      summary: `frontendutvikler fra nordens Paris, Tromsø.`,
    },
    description: `Blogg og portofolio for Michael Krøyserth-Simsø`,
    siteUrl: `https://michaelsimsoe.no/`,
    social: {
      twitter: `michaelsimsoe`,
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-155297311-1",
      head: false,
      anonymize: true,
      respectDNT: true,
      // Enables Google Optimize using your container Id
      // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      // // Enables Google Optimize Experiment ID
      // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
      // // Set Variation ID. 0 for original 1,2,3....
      // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
      // Defers execution of google analytics script after page load
      defer: true,
      // sampleRate: 5,
      // siteSpeedSampleRate: 10,
      cookieDomain: "michaelsimsoe.no",
      // defaults to false
      enableWebVitalsTracking: true,
    }
  }, 
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sass",
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  "gatsby-plugin-sitemap",
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/
      }
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-remark-images",
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: [{
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 1200,
        }
      }]
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  // Blog related plugins
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/blog`,
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/assets`,
      name: `assets`,
    },
  },
]
};

export default config;
