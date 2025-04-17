const express = require("express");
const server = express();
const port = 3001;

server.get("/hello", function (req, res) {
    res.send("Hello Vanessa!");
});

server.get('/', (req, res) => {
    res.send(`
      <h1>Welcome to Vanessa's Homepage</h1>
      <p><a href="/hello">Go to /hello</a></p>
    `);
});  

server.listen(port, function() {
    console.log(`Server läuft unter http://localhost:{port}/`);
});