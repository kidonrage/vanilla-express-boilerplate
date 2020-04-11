const path = require('path');
const merge = require('webpack-merge')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',

  output: {
    filename: "[name].[chunkthash].js",
    publicPath: "/"
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/index.html", 
      filename: "./index.html",
      liveReloadScript: "<script src=\"http://localhost:35729/livereload.js\"></script>"
    }),
  ]
})