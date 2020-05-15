const DBConfiguration = require("./DBConfiguration");
const path = require("path");

function sendConversationsOfUser(req, res, uid) {
  DBConfiguration.getConnection(function (err, conn) {
    if (err) {
      console.log(`error in connecting while getting conversations : ${err}`);
      res.status(500).sendFile(path.resolve(__dirname + "/../../ui/500.html"));
    }

    conn.query(
      `select * from Conversations where user_one=${uid} or user_two=${uid}`,
      function (queryError, result) {
        if (queryError) {
          console.log(`error in query while getting conversations : ${err}`);
          res
            .status(500)
            .sendFile(path.resolve(__dirname + "/../../ui/500.html"));
        }

        res.send(result);
      }
    );
    conn.release();
  });
}

module.exports = {
  sendConversationsOfUser: sendConversationsOfUser,
};
