const express = require('express');
const path = require('path');
const chokidar = require('chokidar');
const webpack = require('webpack');
const webpackConfig = require('./webpack.common');
const webpackDevMiddleware = require('webpack-dev-middleware');

const PUBLIC_DIR = path.join(__dirname, 'public');
const HTML_FILE = path.join(PUBLIC_DIR, 'index.html');

const app = express();

if (process.env.NODE_ENV === "development") {
  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    })
  );

  const watcher = chokidar.watch('./server');

  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log("Clearing /server/ module cache from server");
      Object.keys(require.cache).forEach(function(id) {
        if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id];
      });
    });
  });
}

app.use(express.static(PUBLIC_DIR));

const port = process.env.PORT || 3000;

const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

app.get('/api', (req, res) => {
  res.send(mockResponse);
});

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});