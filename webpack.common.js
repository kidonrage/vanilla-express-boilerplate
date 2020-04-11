const path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');


module.exports = {
  entry: "./client/index.js",

  output: {
    path: path.join(__dirname, 'dist', 'public'),
    filename: "[name].js",
    publicPath: "/"
  },

  plugins: [
    new LiveReloadPlugin()
  ],

  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      }

    ]
  }

};