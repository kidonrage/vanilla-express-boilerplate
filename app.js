const express = require('express');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'public');
const HTML_FILE = path.join(PUBLIC_DIR, 'index.html');

const app = express();

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === "development") {
  console.log('development')
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.dev');
  const webpackDevMiddleware = require('webpack-dev-middleware');

  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    })
  );
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