import {initializeApp} from "firebase/app"

console.log(initializeApp); // function

const firebaseConfig = {
  apiKey: "AIzaSyBvQ0pUP2_ShGKvWBTvp6fpr9DPbf3KDNg",
  authDomain: "piyush-5e346.firebaseapp.com",
  projectId: "piyush-5e346",
  storageBucket: "piyush-5e346.firebasestorage.app",
  messagingSenderId: "448498645227",
  appId: "1:448498645227:web:2526f997ae6fe14dfca6ae",
  measurementId: "G-ZXGK321XZE",

  databaseURlL:"https://piyush-5e346-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

console.log(app);  // object
