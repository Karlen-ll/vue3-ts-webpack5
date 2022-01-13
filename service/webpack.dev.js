const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

// Configuration
const { paths, alias, extensions, port, rule, option } = require('./config/')

module.exports = {
  mode: 'development',
  entry: `${paths.src}/entry-client.ts`,

  output: {
    publicPath: '/',
    path: paths.build,
    filename: '[name].[contenthash].js'
  },

  resolve: {
    alias,
    extensions
  },

  devtool: 'eval-cheap-module-source-map',

  devServer: {
    static: {
      directory: paths.public
    },

    compress: true,
    port
  },

  module: {
    rules: [rule.vue, rule.ts, rule.js, rule.scss, rule.url]
  },

  plugins: [
    new CopyWebpackPlugin(option.copyWebpackPlugin),

    new HtmlWebpackPlugin({
      ...option.htmlWebpackPlugin,

      env: 'env = { a: 123 }'
    }),

    new VueLoaderPlugin(),

    /**
     * @see https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags
     */
    new webpack.DefinePlugin(option.definePlugin_dev)
  ],

  cache: true
}
