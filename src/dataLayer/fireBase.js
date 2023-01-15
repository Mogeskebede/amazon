import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoigAwOGsLJuLZT6m9rogTccGuASQ2ePM",
  authDomain: "clone-da39b.firebaseapp.com",
  projectId: "clone-da39b",
  storageBucket: "clone-da39b.appspot.com",
  messagingSenderId: "1075959434277",
  appId: "1:1075959434277:web:aa1eb2ce9702d440b6c3cc",
  measurementId: "G-82NX3DW65X"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { db, auth };
