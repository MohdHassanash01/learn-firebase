// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAivSadvvQgfeJX3Jg8LHoBhaStX73r6tc",
  authDomain: "project1-55482.firebaseapp.com",
  projectId: "project1-55482",
  storageBucket: "project1-55482.firebasestorage.app",
  messagingSenderId: "778732295011",
  appId: "1:778732295011:web:598bc91f74942f87c83956",
  measurementId: "G-75VME5WFLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleprovider = new GoogleAuthProvider()
export const db = getFirestore(app)