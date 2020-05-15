function getRecentConversatorNames(conversationWith) {
  console.log("called");
  //get list of all users whom one conversate
  $.get("http://localhost:5000/chat/conversationsOfUser", (data) => {
    var haveConversation = false;

    //
  });
}

function allFunctionsToCall() {
  getRecentConversatorNames(7);
}

function getDetailsOfUsers(userNames) {}
