//requirements and imports
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();

var app = express();

//midlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "ui")));
app.use(cookieParser());
//routes
app.use("/", require("./server/routes/loginSignupRouter"));
app.use("/chat", require("./server/routes/chatRouter"));
app.use("/profile", require("./server/routes/profileRouter"));
//app listening

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
