import { createContext, useContext, useState, useEffect, } from "react";
import {initializeApp} from "firebase/app"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
} from "firebase/auth"

import {getFirestore} from "firebase/firestore"

const FirebaseContext = createContext(null)

const firebaseConfig = {
  apiKey: "AIzaSyAr_SQBpkMHP_nFOgP3rV6-n5p7hUlXQdE",
  authDomain: "project-tracker-acf1a.firebaseapp.com",
  projectId: "project-tracker-acf1a",
  storageBucket: "project-tracker-acf1a.firebasestorage.app",
  messagingSenderId: "475809830726",
  appId: "1:475809830726:web:b6c154305b1ac79a13b747"
};

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const  googleProvider = new GoogleAuthProvider()

const firestore = getFirestore(firebaseApp)

export const FirebaseProvider = (props) => {

    function signupuserWithemailandPassword(email,password){
        return createUserWithEmailAndPassword(firebaseAuth,email, password)
    }


     function signinWithEmailAndPassword(email,password){
        return signInWithEmailAndPassword(firebaseAuth,email, password)
    }

    function signinWithGoogle(){
        return signInWithPopup(firebaseAuth,googleProvider)
    }


    function handleCreatenewList(name,isbn, price,coverPic){



    }


    const [user, setuser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, user => {
            if (user) {
                setuser(user)
            }
            else setuser(null)
            
        })

    },[])
    
    const isloggedIn = user ? true : false

    return (
        <FirebaseContext.Provider value={{signupuserWithemailandPassword,
         signinWithEmailAndPassword,
         signinWithGoogle,
         handleCreatenewList,
         user,
         isloggedIn   
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

// Custom hook for easy use
export const useFirebase = () => useContext(FirebaseContext);
