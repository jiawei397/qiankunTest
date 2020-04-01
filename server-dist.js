const express = require('express');
const compression = require('compression');
const path = require('path');
const port = 9000;
const app = express();

app.all('*', function (req, res, next) {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  // res.header('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(compression());
app.use('/', express.static(path.join(__dirname, './root-web/dist')));//为了以当前目录为准，必须使用__dirname来处理相当路径
app.use('/A', express.static(path.join(__dirname, './child-web/dist')));
app.use('/B', express.static(path.join(__dirname, './child-web2/dist')));

app.listen(port, () => {
  let uri = 'http://localhost:' + port;
  console.log('Listening at ' + uri + '\n');
});
