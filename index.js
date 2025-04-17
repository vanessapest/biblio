const express = require("express");
const server = express();
const port = 3001;

server.get("/hello", function (req, res) {
    res.send("Hello Vanessa!");
});

server.listen(port, function() {
    console.log("Express listening on " + port);
});