var globalCID;
var userOfChat;
function setConversationEnvironment(conversationWith) {
  console.log("called");
  document.cookie = `convoWith:${conversationWith}`;

  //get list of all users whom one conversate
  $.get("http://localhost:5000/chat/conversationsOfUser", (data) => {
    console.log(data);
    var uids = makeUidsFromData(data);

    var idOfLoggedInUser = Number(getCookie("uid"));
    console.log(idOfLoggedInUser);
    console.log(uids);

    console.log(uids.includes(6));
    if (!uids.includes(conversationWith)) {
      $.get(
        `http://localhost:5000/chat/createConversation?userOne=${idOfLoggedInUser}&userTwo=${conversationWith}`
      );
    }
    $.get(
      `http://localhost:5000/chat/getConversationID?userOne=${idOfLoggedInUser}&userTwo=${conversationWith}`,
      function (data) {
        var cid = data[0].c_id;

        console.log(cid);
        document.cookie = `CID:${cid}`;
        globalCID = cid;
        populateMessages();
      }
    );
  });
}

function allFunctionsToCall() {
  var num = Number(getCookie("chatWith"));
  setConversationEnvironment(num);
}

function getDetailsOfUsers(uids) {}

function makeGetRequest(myUrl) {
  return Promise.resolve(
    $.ajax({
      url: myUrl,
    })
  );
}

function makeUidsFromData(data) {
  var uids = [];
  for (var i = 0; i < data.length; i++) {
    uids.push(data[i].user_one);
    uids.push(data[i].user_two);
  }
  var uniqueList = [...new Set(uids)];
  return uniqueList;
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function populateMessages() {
  scrollToBottom();
  $("#all_messages").empty();
  var cid = getCookie("currentCID");
  console.log(`loging cid ${cid}`);
  console.log(userOfChat);

  $.get(
    `http://localhost:5000/chat/getMessagesOfCID?cid=${cid}`,
    (messageData) => {
      for (var i = 0; i < messageData.length; i++) {
        var sender;
        var text = messageData[i].text;

        var senderID = messageData[i].sender_id;
        var user1ID = Number(getCookie("uid"));
        if (senderID == user1ID) {
          console.log("if called");
          sender = "You";
        } else {
          sender = "other";
        }
        var applyColor = "";
        if (sender == "other") {
          applyColor = " background: #dddddd;";
        } else {
          applyColor = " background: #fab7b7;";
        }
        $("#all_messages").append(`
        <div class="card shadow-sm" style="margin-top: 3px;${applyColor}">
        <div class="card-body">
          <h5
            class="card-title justify-content-center d-flex font-weight-light"
            style="color: #cc0066;"
          >
           
          </h5>
          <p class="card-text justify-content-center d-flex">
            ${text}
          </p>
        </div>
      </div>
      <br />`);
      }
    }
  );
}

function postMessage() {
  scrollToBottom();
  var text = $("#type_message").val();
  if (text == "") {
    return;
  }
  var from = getCookie("uid");
  var cid = getCookie("currentCID");

  var to = getCookie("convoUser2");
  $.get(
    `http://localhost:5000/chat/addMessage?text=${text}&from=${from}&to=${to}&cid=${cid}`,
    (data) => {
      populateMessages();
    }
  );
}

function scrollToBottom() {
  var objDiv = document.getElementById("all_messages");
  objDiv.scrollTop = objDiv.scrollHeight;
}
