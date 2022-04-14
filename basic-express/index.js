const express = require('express');
const app = express();
const http = require('http');

const PORT = 8080;

const server = http.createServer();

server.listen(PORT, () => {
  console.log(`This server is listening to port ${PORT}`);
});
