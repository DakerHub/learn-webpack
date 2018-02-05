const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: [{
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              }],
              fallback: 'vue-style-loader'
            })
          },
          extractCSS: true,
          // cssSourceMap: true,
          preserveWhitespace: false
        }
      }
    ]
  },
  devtool: '#source-map',
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
