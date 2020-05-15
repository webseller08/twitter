const express = require("express");
const path = require("path");
const router = express.Router();
const userDetailHandler = require("../models/userDetailsHandler");

router.get("/:userName", (req, res) => {
  console.log(req.params.userName);

  res.sendFile(path.resolve(__dirname + "/../../ui/profile.html"));
});

router.get("/:userName/userDetails", (req, res) => {
  userDetailHandler.sendDetailsOfUsers(res, req.params.userName, "username");
});

module.exports = router;
