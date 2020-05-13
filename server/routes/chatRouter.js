const express = require("express");
const path = require("path");
const chatHandler = require("../models/chatHandler");
const userDetailHandler = require("../models/userDetailsHandler");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../../ui/chat.html"));
});

router.get("/conversationsOfUser", (req, res) => {
  chatHandler.sendConversationsOfUser(req, res, req.cookies.uid);
});

router.get("/detailsOfUsers", async (req, res) => {
  userDetailHandler.sendDetailsOfUsers(res, req.param("data"), req.param("on"));
});
module.exports = router;
