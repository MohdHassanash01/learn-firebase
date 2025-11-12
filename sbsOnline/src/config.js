// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3a_09rdFI_BRj2hKmnSOcbifrpIZDVps",
  authDomain: "learn-firebase-50791.firebaseapp.com",
  projectId: "learn-firebase-50791",
  storageBucket: "learn-firebase-50791.firebasestorage.app",
  messagingSenderId: "692386664743",
  appId: "1:692386664743:web:c4aa8059e20d95114b9902",
  measurementId: "G-PKV41KFE87",
  databaseURL:"https://learn-firebase-50791-default-rtdb.firebaseio.com/"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
