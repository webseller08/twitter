const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../../ui/login.html"));
});

router.get("/signup", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../../ui/create_acc.html"));
});

module.exports = router;
