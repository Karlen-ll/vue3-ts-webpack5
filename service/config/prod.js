const { VueLoaderPlugin } = require('vue-loader')

// Configuration
const { alias, extensions, rule } = require('./index')

const prod = {
  mode: 'production',

  resolve: {
    alias,
    extensions
  },

  module: {
    rules: [rule.js, rule.ts, rule.vue, rule.url]
  },

  plugins: [new VueLoaderPlugin()]
}

module.exports = prod
