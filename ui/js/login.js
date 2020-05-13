function validateUser() {
  user = {
    userName: $("#userName").val(),
    password: $("#password").val(),
  };

  console.log("validate user called ");
  $.get(
    `http://localhost:5000/validateUser?userName=${user.userName}&password=${user.password}`,
    (data) => {
      console.log("inside function");
      console.log(data);

      try {
        if (data.userName != "none") {
          console.log("yes called ");
          document.cookie = `username:${data.userName}`;
          console.log("set cookies");
          console.log(document.cookie);
          window.location.href = "http://localhost:5000/signup";
        } else {
          alert("no man u cannot fool me ");
        }
      } catch (error) {
        alert("Again plzz ");
      }
    }
  );
}
