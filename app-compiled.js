"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _routes = _interopRequireDefault(require("./server/api/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PUBLIC_DIR = _path["default"].join(__dirname, 'public');

var HTML_FILE = _path["default"].join(PUBLIC_DIR, 'index.html');

var app = (0, _express["default"])();

if (process.env.NODE_ENV === "development") {
  var webpack = require('webpack');

  var webpackConfig = require('./webpack.dev');

  var webpackDevMiddleware = require('webpack-dev-middleware');

  var compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
}

app.use(_express["default"]["static"](PUBLIC_DIR));
var port = process.env.PORT || 3000;
app.use('/api', _routes["default"]);
app.get('/', function (req, res) {
  res.sendFile(HTML_FILE);
});
app.listen(port, function () {
  console.log('App listening on port: ' + port);
});
