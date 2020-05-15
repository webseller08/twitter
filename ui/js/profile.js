function getUser() {
  userName = "sajjad";
  console.log("inside get user details");
  $.get(`http://localhost:5000/profile/'${userName}'/userDetails`, (data) => {
    console.log(data[0]);
  });
}
