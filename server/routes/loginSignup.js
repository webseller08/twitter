const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../../ui/login.html"));
});

router.get("/signup", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../../ui/create_acc.html"));
});

router.post("/createUser", (req, res) => {
  require("../models/userCreationHandler").createNewuser(req.body);
  res.redirect("/login");
});

router.post("/login", async (req, res) => {
  require("../models/DBConfiguration").getConnection(
    (connectionError, connection) => {
      if (connectionError) {
        throw error;
      }
      connection.query(
        `select * from Users where username='${req.body.userName}' and password='${req.body.password}'`,
        (err, result) => {
          if (err) {
            res.redirect("/login");
          }
          try {
            if (result[0] != undefined) {
              res.send("hi");
            } else {
              res.redirect("/login");
            }
          } catch (error) {
            res.redirect("/login");
          }
        }
      );

      connection.release();
    }
  );
});
module.exports = router;
