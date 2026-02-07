// Firebase CDN config
const firebaseConfig = {
  apiKey: "AIzaSyDNAhBup924n6zfMsvDP-1UTpn2gafvfi0",
  authDomain: "female-ai-assistant.firebaseapp.com",
  projectId: "female-ai-assistant",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// LOGIN FUNCTION
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("loginBox").style.display = "none";
      document.getElementById("chatBox").style.display = "block";
      alert("Login successful");
    })
    .catch((error) => {
      alert(error.message);
    });
}
