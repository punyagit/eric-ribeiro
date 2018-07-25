const http = require('http');
const app = require('./app');
require('dotenv').load();
const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(PORT, console.log(PORT));