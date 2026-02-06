// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// 🔥 Firebase configuration (paste your config here)
const firebaseConfig = {
  apiKey: "AIzaSyDNAhBup924n6zfMsvDP-1UTpn2gafvfi0",
  authDomain: "female-ai-assistant.firebaseapp.com",
  projectId: "female-ai-assistant",
  storageBucket: "female-ai-assistant.firebasestorage.app",
  messagingSenderId: "1012195967581",
  appId: "1:1012195967581:web:8239779efe35b7af0a83b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Make auth available globally
window.auth = auth;
