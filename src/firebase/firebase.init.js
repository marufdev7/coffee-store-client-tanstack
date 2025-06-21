// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9AK0OzjLU5IeycKwXHgEMvrtz1gSmLC4",
  authDomain: "coffee-store-b7829.firebaseapp.com",
  projectId: "coffee-store-b7829",
  storageBucket: "coffee-store-b7829.firebasestorage.app",
  messagingSenderId: "154266742059",
  appId: "1:154266742059:web:21859c75aea73b5d71a96e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);