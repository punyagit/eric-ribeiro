const express = require('express');
const http = require('http');
const app = require('./app');
require('dotenv').load();
const PORT = process.env.PORT || 8081;

const server = http.createServer(app);

server.listen(PORT, console.log(PORT));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  express().use(express.static("eric-frontend/build"));
  // Routes | Create the routes. Any route that gets hit here, load the react index.html file.
  express().get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "eric-frontend", "build", "index.html"));
  });
}