module.exports = {
  siteMetadata: {
    title: 'blog',
    siteUrl: 'https://doong-jo.github.io',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'G-MD2BW2F1M1',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/favicons/android-chrome-512x512.png',
        icons: [
          {
            src: 'static/favicons/android-chrome-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: 'static/favicons/android-chrome-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'static/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'static/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/page-layout.js'),
        },
      },
    },
  ],
};
