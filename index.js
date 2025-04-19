const express = require("express");
const server = express();
const port = process.env.PORT || 3002;

server.get("/hello", function (req, res) {
    res.send("Hello Vanessa!");
});

server.get('/', (req, res) => {
    res.send(`
      <h1>Welcome to Vanessa's Homepage</h1>
      <p><a href="/hello">Go to /hello</a></p>
    `);
});  

/*server.listen(port, function() {
    console.log("Express listening on http://localhost:" + port);
});*/

server.listen(port, '0.0.0.0', () => {
    console.log(`Listening on http://localhost:${port}`);
});