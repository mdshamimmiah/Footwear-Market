// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcSwt7MbmLHtTVcO59ppufwzF-yW69Fms",
  authDomain: "booking-room-a514f.firebaseapp.com",
  projectId: "booking-room-a514f",
  storageBucket: "booking-room-a514f.appspot.com",
  messagingSenderId: "1017275376870",
  appId: "1:1017275376870:web:83cfa25734ee97f63a0727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;