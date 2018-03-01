const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
    port: 9000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
