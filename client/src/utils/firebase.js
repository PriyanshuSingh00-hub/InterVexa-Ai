
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervexa-ai-37401.firebaseapp.com",
  projectId: "intervexa-ai-37401",
  storageBucket: "intervexa-ai-37401.firebasestorage.app",
  messagingSenderId: "560167821131",
  appId: "1:560167821131:web:8fcb057176029df75012ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app) ;

const provider = new GoogleAuthProvider();

export {auth,provider}