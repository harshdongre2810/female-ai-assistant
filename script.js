// ===== LOGIN FUNCTION =====
document.getElementById("loginBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const status = document.getElementById("loginStatus");

  if (email === "" || password === "") {
    status.innerText = "Email aur Password dono bharna zaroori hai";
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("loginBox").style.display = "none";
      document.getElementById("chatBox").style.display = "block";
    })
    .catch((error) => {
      status.innerText = error.message;
    });
});

// ===== SEND MESSAGE FUNCTION =====
document.getElementById("sendBtn").addEventListener("click", send);

function send() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("messages");

  const userText = input.value.trim();
  if (userText === "") return;

  // User message
  messages.innerHTML += `<p><b>You:</b> ${userText}</p>`;

  // Female AI test reply (TEMP BRAIN)
  setTimeout(() => {
    messages.innerHTML += `<p><b>Shejal:</b> 😊 Main sun rahi hoon… thoda aur batao</p>`;
    messages.scrollTop = messages.scrollHeight;
  }, 600);

  input.value = "";
}
