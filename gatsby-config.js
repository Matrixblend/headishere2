// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.headishere.com",
    title: `Head is Here!`,
    author: `Gatsby`,
    description: "Head Is Here!",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-ffmpeg",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Contentful Homepage",
        short_name: "Gatsby",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffe491",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      }
    },{
        resolve: "gatsby-remark-embed-video",
        options: {
          width: 800,
          ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
          height: 400, // Optional: Overrides optional.ratio
          related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
          noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
          loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
          urlOverrides: [
            {
              // id: "youtube",
              // embedURL: (videoId: string) =>
              //   `https://www.youtube-nocookie.com/embed/${videoId}`,
            },
          ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
          containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
          iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
          sandbox: 'allow-same-origin allow-scripts allow-presentation', // Optional: iframe sandbox options - Default: undefined
      
      }
    },
       "gatsby-remark-responsive-iframe" //Optional: Must be loaded after gatsby-remark-embed-video
    ] 
  }

