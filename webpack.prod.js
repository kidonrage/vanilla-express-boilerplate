const path = require('path');
const merge = require('webpack-merge')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: "[name].js",
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/index.html", 
      filename: "./index.html",
    }),
  ]
})