const DBConfiguration = require("./DBConfiguration");
const path = require("path");

function sendConversationsOfUser(req, res, uid) {
  DBConfiguration.getConnection(function (err, conn) {
    if (err) {
      res.status(500).sendFile(path.resolve(__dirname + "/../../ui/500.html"));
    }

    conn.query(
      `select * from Conversations where user_one=${uid} or user_two=${uid}`,
      function (queryError, result) {
        if (queryError) {
          res.status.sendFile(path.resolve(__dirname + "/../../ui/500.html"));
        }

        res.send(result);
      }
    );
    conn.release();
  });
}

function sendDetailsOfUsers(req, res, uids) {
  DBConfiguration.getConnection(function (err, conn) {
    if (err) {
      res.status.sendFile(path.resolve(__dirname + "/../../ui/500.html"));
    }

    conn.query(`select * from Users where uid in (${uids})`, function (
      queryError,
      result
    ) {
      if (queryError) {
        res.status.sendFile(path.resolve(__dirname + "/../../ui/500.html"));
      }

      res.send(result);
    });
    conn.release();
  });
}
module.exports = {
  sendConversationsOfUser: sendConversationsOfUser,
};
