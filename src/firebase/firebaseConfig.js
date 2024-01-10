// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB5yyTU1IZsxxju2AJ1r9otr9Pfc1NtEi4",
  authDomain: "kitchen-firebase-react-app.firebaseapp.com",
  projectId: "kitchen-firebase-react-app",
  storageBucket: "kitchen-firebase-react-app.appspot.com",
  messagingSenderId: "416565997062",
  appId: "1:416565997062:web:8a0e99796e9747338f9d87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const db = getFirestore(app);
export { googleProvider, auth, db };
