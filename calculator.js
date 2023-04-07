const express = require("express");
const app = express();

// Create root route
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
// listening on port 3000
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
