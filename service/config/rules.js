const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Helpers
const isDevelopment = process.env.NODE_ENV !== 'production'
const sourceMap = isDevelopment

module.exports = {
  js: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },

  ts: {
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      }
    ]
  },

  vue: {
    test: /\.vue$/,
    use: ['vue-loader']
  },

  scss: {
    test: /\.s[ac]ss$/i,
    use: [
      isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap,
          additionalData: `@import "~@/style/global.scss";$env: ${process.env.NODE_ENV};`
        }
      }
    ]
  },

  url: {
    test: /\.(eot|woff|woff2|ttf|jpg|png|svg|gif)([\?]?.*)$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 1024,
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'client/assets/[hash].[ext]'
          }
        }
      }
    }
  }
}
