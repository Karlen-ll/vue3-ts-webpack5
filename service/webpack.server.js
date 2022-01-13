const webpack = require('webpack')
const { merge } = require('webpack-merge')
const WebpackNodeExternals = require('webpack-node-externals')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

// Configuration
const config = require('./config/prod')
const { paths, rule, option } = require('./config/')

module.exports = merge(config, {
  entry: `${paths.src}/entry-server.ts`,
  target: 'node',

  output: {
    publicPath: '/',
    path: paths.build,
    filename: 'server/server.bundle.js',
    library: { type: 'commonjs2' }
  },

  externals: WebpackNodeExternals({
    allowlist: /\.(css|vue)([\?]?.*)$/
  }),

  module: {
    rules: [
      {
        test: rule.scss.test,
        use: ['ignore-loader']
      }
    ]
  },

  plugins: [new WebpackManifestPlugin({}), new webpack.DefinePlugin(option.definePlugin_server)],

  optimization: {
    splitChunks: false,
    minimize: false
  }
})
