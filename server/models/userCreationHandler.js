function createUser(user) {
  var username = user.userName;
  var fullname = user.fullName;
  var password = user.password;
  var acctype = user.acctype;

  require("./DBConfiguration").getConnection((err, conn) => {
    conn.query(
      `INSERT INTO Users (username,fullname,account_type,password,desc) VALUES ('${username}','${fullname}','${acctype}','${password}')`,
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
