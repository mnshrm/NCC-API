const path = require("path");
const express = require("express");
const app = express();

app.use("/", express.static("public"));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started at port 5000");
});

module.exports = app;
