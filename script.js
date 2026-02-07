document.getElementById("loginBtn").onclick = login;
document.getElementById("sendBtn").onclick = send;

function login() {
  const email = emailInput();
  const password = passwordInput();

  auth.signInWithEmailAndPassword(email, password)
    .then(showChat)
    .catch(() => {
      auth.createUserWithEmailAndPassword(email, password)
        .then(showChat)
        .catch(err => showStatus(err.message));
    });
}

function showChat() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("chatBox").style.display = "block";
}

function emailInput() {
  return document.getElementById("email").value;
}

function passwordInput() {
  return document.getElementById("password").value;
}

function showStatus(msg) {
  document.getElementById("loginStatus").innerText = msg;
}

async function send() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMsg("You", text);
  input.value = "";

  addMsg("Shejal", "typing...");

  const res = await fetch(
    "https://api-inference.huggingface.co/models/google/flan-t5-large",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${window.HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: `You are a sweet Indian female assistant. Reply in Hindi or English.\nUser: ${text}\nAssistant:`
      })
    }
  );

  const data = await res.json();
  removeTyping();

  const reply = data[0]?.generated_text || "Sorry, main samajh nahi paayi 😔";
  addMsg("Shejal", reply);
  speak(reply);
}

function addMsg(who, msg) {
  const box = document.getElementById("messages");
  box.innerHTML += `<p><b>${who}:</b> ${msg}</p>`;
  box.scrollTop = box.scrollHeight;
}

function removeTyping() {
  const box = document.getElementById("messages");
  box.innerHTML = box.innerHTML.replace(/Shejal: typing\.\.\./, "");
}

function speak(text) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "hi-IN";
  speechSynthesis.speak(u);
}
