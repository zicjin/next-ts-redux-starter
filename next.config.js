const withCSS = require('@zeit/next-css')
const withLess = require('./next-less')
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const optimizedImages = require('next-optimized-images')
const composePlugins = require('next-compose-plugins')

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

const nextConfig = {
  // distDir: 'build',
  webpack: (config, options) => {
    if (options.isServer) {
      // Do not run type checking twice:
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }
    return config
  },
}

module.exports = composePlugins([
  withTypescript,

  [withCSS, {
    cssModules: true,
    cssLoaderOptions: {
      // typings-for-css-modules-loader config here
      namedExport: true,
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    },
  }],

  [withLess, {
    lessCssModules: false,
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: {
        'primary-color': '#2B69D5', // github blue
        'link-color': '#6200ee', // purple
        // 'link-color': '#3700B3', // deep blue
        // 'link-color': '#1DA57A', // grean
        // 'border-radius-base': '2px',
      },
    },
  }],

  optimizedImages,
], nextConfig)
