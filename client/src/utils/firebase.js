import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervexa-4d360.firebaseapp.com",
  projectId: "intervexa-4d360",
  storageBucket: "intervexa-4d360.appspot.com",
  messagingSenderId: "535552654208",
  appId: "1:535552654208:web:788ad04139ba416d325f65"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };






