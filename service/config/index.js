const paths = require('./paths')
const alias = require('./alias')
const rule = require('./rules')

// Helpers
const htmlFilename = 'index.html'
const getEnvVars = (isClient = false, isDev = false) => {
  return {
    'process.env.VUE_ENV': isClient ? '"client"' : '"server"',
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_OPTIONS_API__: isDev
  }
}

module.exports = {
  port: 9000,
  paths,
  alias,
  rule,

  option: {
    htmlWebpackPlugin: {
      filename: htmlFilename,
      template: `${paths.public}/${htmlFilename}`,
      title: 'Vue3 project',
      description: 'Vue3 boilerplate',
      keywords: 'Vue3, Webpack5, TypeScript, Jest'
    },

    copyWebpackPlugin: {
      patterns: [
        {
          from: paths.public,
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    },

    definePlugin_dev: getEnvVars(true, true),
    definePlugin_client: getEnvVars(true),
    definePlugin_server: getEnvVars()
  },

  extensions: ['.js', '.ts', '.vue', '.json']
}
