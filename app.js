const path = require("path");
const express = require("express");
const app = express();

app.use("/", express.static("public"));

app.use("", (req, res, next) => {
  res.redirect("error/error.html");
});

app.listen(5000, () => {
  console.log("Server started at port 5000");
});
