// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHEH0SbyhyEviEIw4hyfSFq_5-XsfMcIg",
  authDomain: "fedebistrobar.firebaseapp.com",
  projectId: "fedebistrobar",
  storageBucket: "fedebistrobar.appspot.com",
  messagingSenderId: "456086691309",
  appId: "1:456086691309:web:02ecb1bd9f1a0caa3b9be4"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
export const database = getFirestore(fb); 

