// context/Firebase.jsx
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBvQ0pUP2_ShGKvWBTvp6fpr9DPbf3KDNg",
  authDomain: "piyush-5e346.firebaseapp.com",
  projectId: "piyush-5e346",
  storageBucket: "piyush-5e346.firebasestorage.app",
  messagingSenderId: "448498645227",
  appId: "1:448498645227:web:2526f997ae6fe14dfca6ae",
  measurementId: "G-ZXGK321XZE",
  databaseURL: "https://piyush-5e346-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

// Create context
const FirebaseContext = createContext(null);

// Create provider
export const FirebaseProvider = ({ children }) => {
  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(FirebaseAuth, email, password);

  const signInUserWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(FirebaseAuth, email, password);

  const putData = (key, data) => set(ref(database, key), data);

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        putData,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

// Custom hook for easy use
export const useFirebase = () => useContext(FirebaseContext);
