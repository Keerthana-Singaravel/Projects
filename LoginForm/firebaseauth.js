// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import{getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTIWXWpebb8aPE2NAuQ_K5v0TMQxuewTI",
  authDomain: "login-form-8ebad.firebaseapp.com",
  projectId: "login-form-8ebad",
  storageBucket: "login-form-8ebad.appspot.com",
  messagingSenderId: "230324266691",
  appId: "1:230324266691:web:5d0a239b3b611f8c726476"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signUp=document.getElementById('submitSignUp');
signUp.addEventListener