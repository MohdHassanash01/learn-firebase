// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAr_SQBpkMHP_nFOgP3rV6-n5p7hUlXQdE",
  authDomain: "project-tracker-acf1a.firebaseapp.com",
  projectId: "project-tracker-acf1a",
  storageBucket: "project-tracker-acf1a.firebasestorage.app",
  messagingSenderId: "475809830726",
  appId: "1:475809830726:web:b6c154305b1ac79a13b747",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
