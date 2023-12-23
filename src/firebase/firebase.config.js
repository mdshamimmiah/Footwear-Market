


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnDFOtq59_Em_iU-IN3ywQsso9bjoo-K0",
  authDomain: "footwear-market-cc2ef.firebaseapp.com",
  projectId: "footwear-market-cc2ef",
  storageBucket: "footwear-market-cc2ef.appspot.com",
  messagingSenderId: "287835511828",
  appId: "1:287835511828:web:bf104136b9c40d9ee51b01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;