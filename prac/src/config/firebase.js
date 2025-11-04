import {initializeApp} from "firebase/app"

console.log(initializeApp);


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjSQ246j5dneVMDddQTTqgnUN7VlZv0p8",
  authDomain: "practice-2bb80.firebaseapp.com",
  projectId: "practice-2bb80",
  storageBucket: "practice-2bb80.firebasestorage.app",
  messagingSenderId: "383784346739",
  appId: "1:383784346739:web:e43b9a08d073445e64f606",
  measurementId: "G-ZPX15PFH72"
};


export const app = initializeApp(firebaseConfig)
console.log(typeof app);
