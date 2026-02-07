// Firebase CDN ke liye configuration (FINAL)

const firebaseConfig = {
  apiKey: "AIzaSyDNAhBup924n6zfMsvDP-1UTpn2gafvfi0",
  authDomain: "female-ai-assistant.firebaseapp.com",
  projectId: "female-ai-assistant",
  storageBucket: "female-ai-assistant.appspot.com",
  messagingSenderId: "1012195967581",
  appId: "1:1012195967581:web:8239779efe35b7af0a83b4"
};

// Firebase initialize
firebase.initializeApp(firebaseConfig);

// Firebase Authentication object
const auth = firebase.auth();
