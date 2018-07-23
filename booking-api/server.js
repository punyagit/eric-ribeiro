const http = require('http');
const app = require('./app');
require('dotenv').load();
const PORT = process.env.PORT || 8081;

const server = http.createServer(app);

server.listen(PORT, console.log(PORT));
