const path = require('path')
const isDev = process.env.NODE_ENV = 'development'

const HTMLPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

const config = {
  target: 'web',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  // mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'] //为什么Vue里的styl代码报错呢
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']//先后顺序有讲究 否则报错CssSyntaxError Module build failed (from ./node_modules/css-loader/dist/cjs.js):
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(gif|jpg|png|svg|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name]-base64.[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new VueLoaderPlugin(),
    new HTMLPlugin()
  ]
}

if (isDev) {
  config.devServer = {
    host: '0.0.0.0',
    port: 8000,
    overlay: {
      errors: true
    },
    hot: true
  }
}

module.exports = config