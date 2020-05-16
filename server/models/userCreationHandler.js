function createUser(user) {
  var username = user.userName;
  var fullname = user.fullName;
  var password = user.password;
  var acctype = user.acctype;
  var desc = user.desc;

  require("./DBConfiguration").getConnection((err, conn) => {
    conn.query(
      `INSERT INTO Users (username,fullname,account_type,password,description) VALUES ('${username}','${fullname}','${acctype}','${password}','${desc}',)`,
      (error, result) => {
        if (err) throw error;
      }
    );
    conn.release();
  });
}

module.exports = {
  createNewuser: createUser,
};
