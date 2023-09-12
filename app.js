const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server Is Listening on 3000");
});

app.get("/hello", (req, res) => {
  console.log("Hello");
  res.json("Blinking Bro");
});
