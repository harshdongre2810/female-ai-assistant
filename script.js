function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("loginBox").style.display = "none";
      document.getElementById("chatBox").style.display = "block";
    })
    .catch(err => alert(err.message));
}

function send() {
  const input = document.getElementById("userInput").value;
  document.getElementById("chat").innerHTML += "<p><b>You:</b> " + input + "</p>";
  document.getElementById("chat").innerHTML += "<p><b>Shejal:</b> 😊 मैं तुम्हारी बात समझ रही हूँ</p>";
}
document.getElementById("loginBtn").addEventListener("click", login);
document.getElementById("sendBtn").addEventListener("click", send);
