require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Verified Resume',
    siteUrl: 'http://verifiedresume.me',
    description:
      'Build a Professional Resume in minutes selecting from a variety of templates to match your personality and your profession',
    version: '3.0.0',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public|_this_is_virtual_fs_path_)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Verified Resume',
        short_name: 'Verified Resume',
        start_url: '/',
        background_color: '#fff',
        icon: `static/logo/fav.png`,
        orientation: 'landscape',
        theme_color: '#fff',
        display: 'standalone',
      },
    },
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/app/*'] },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/articles`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_APIKEY,
          authDomain: process.env.FIREBASE_AUTHDOMAIN,
          databaseURL: process.env.FIREBASE_DATABASEURL,
          projectId: process.env.FIREBASE_PROJECTID,
          storageBucket: process.env.FIREBASE_STORAGEBUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
          appId: process.env.FIREBASE_APPID,
          measurementId: process.env.FIREBASE_MEASUREMENTID,
        },
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-paypal`,
      options: {
        clientId: `AU01_-LecXiYQn1sT1gHQDI4fvzwq8Fn1zRmKnn3v4qy3nBrHDnBqpo0WFTgFns2ZNCXf19b7REs-10o`,
        currency: `USD`,
      },
    },
  ],
};
