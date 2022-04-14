const app = require('./app');
const http = require('http');

const PORT = 8080;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`This server is listening to port ${PORT}`);
});
