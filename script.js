// ===== FIREBASE AUTH (assumed already loaded via firebase.js) =====

// ===== LOGIN =====
document.getElementById("loginBtn").addEventListener("click", login);
document.getElementById("sendBtn").addEventListener("click", send);

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const status = document.getElementById("loginStatus");

  if (!email || !password) {
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
}

// ===== HUGGING FACE TOKEN (FROM VERCEL ENV) =====
const HUGGINGFACE_TOKEN = window.HF_TOKEN;

// ===== SEND MESSAGE =====
async function send() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("messages");

  const userText = input.value.trim();
  if (userText === "") return;

  // User message
  messages.innerHTML += `<p><b>You:</b> ${userText}</p>`;
  input.value = "";

  // Loading message
  messages.innerHTML += `<p><b>Shejal:</b> typing...</p>`;
  messages.scrollTop = messages.scrollHeight;

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HUGGINGFACE_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: `You are a sweet, friendly female AI assistant named Shejal. Reply politely in simple Hindi or Hinglish.\nUser: ${userText}\nShejal:`
        })
      }
    );

    const data = await response.json();

    // Remove "typing..."
    messages.innerHTML = messages.innerHTML.replace(
      `<p><b>Shejal:</b> typing...</p>`,
      ""
    );

    const aiReply =
      data && data[0] && data[0].generated_text
        ? data[0].generated_text.split("Shejal:").pop()
        : "Sorry, main abhi jawab nahi de pa rahi hoon 😔";

    messages.innerHTML += `<p><b>Shejal:</b> ${aiReply}</p>`;
    messages.scrollTop = messages.scrollHeight;

 } catch (err) {
  messages.innerHTML += `<p><b>Shejal:</b> Error: ${err.message}</p>`;
  console.error("FULL ERROR:", err);
}
