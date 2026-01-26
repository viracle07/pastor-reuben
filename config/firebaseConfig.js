// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw9ImGnj2Wkgui4u48l-fqFYGNssrFDqQ",
  authDomain: "reuwells-284ab.firebaseapp.com",
  projectId: "reuwells-284ab",
  storageBucket: "reuwells-284ab.firebasestorage.app",
  messagingSenderId: "195483159616",
  appId: "1:195483159616:web:483a60ce5f706a64e523a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db}