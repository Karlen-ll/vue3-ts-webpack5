const webpack = require('webpack')
const { merge } = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// Configuration
const config = require('./config/prod')
const { paths, rule, option } = require('./config')

module.exports = merge(config, {
  entry: {
    app: `${paths.src}/entry-client.ts`
  },

  output: {
    publicPath: '/',
    path: paths.build,
    filename: 'client/[name].[contenthash].js'
  },

  module: {
    rules: [rule.scss]
  },

  plugins: [
    new CopyWebpackPlugin(option.copyWebpackPlugin),

    new HtmlWebpackPlugin({
      ...option.htmlWebpackPlugin,

      minify: {
        removeComments: false
      }
    }),

    new MiniCssExtractPlugin({
      filename: 'client/css/[name].[contenthash].css'
    }),

    new CleanWebpackPlugin(),

    new webpack.DefinePlugin(option.definePlugin_client)
  ],

  optimization: {
    runtimeChunk: 'single',
    removeEmptyChunks: true,
    minimize: false,

    splitChunks: {
      chunks: 'all',

      cacheGroups: {
        commons: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendors'
        }
      }
    }
  }
})
