const path = require('path')

// Helpers
const _DIR = '../..'

module.exports = {
  // Source files
  root: path.resolve(__dirname, `${_DIR}/`),

  src: path.resolve(__dirname, `${_DIR}/src`),

  // Production build files
  build: path.resolve(__dirname, `${_DIR}/dist`),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, `${_DIR}/public`)
}
