const express = require('express');
const endpoint = require('./endpoint');
const app = express();

app.use('/', (req, res, next) => {
  console.log('This is the first middleware!');
  next();
});

app.use('/endpoint', endpoint);

module.exports = app;
