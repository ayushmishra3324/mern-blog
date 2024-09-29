// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ce8cc.firebaseapp.com",
  projectId: "mern-blog-ce8cc",
  storageBucket: "mern-blog-ce8cc.appspot.com",
  messagingSenderId: "763978953101",
  appId: "1:763978953101:web:c1a62486f207c3ee600dc4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);