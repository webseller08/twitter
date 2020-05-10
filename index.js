//requirements and imports
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

var app = express();

//midlewares
app.use(bodyParser.urlencoded({ extended: false }));

//app listening

app.listen(3000, () => {
  console.log("Server started listening at port : 3000");
});
