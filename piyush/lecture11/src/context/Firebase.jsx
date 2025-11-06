import { createContext, useContext, useState, useEffect, } from "react";
import {initializeApp} from "firebase/app"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
} from "firebase/auth"

import {getFirestore, collection, addDoc, getDocs} from "firebase/firestore"
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"

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
const storage = getStorage(firebaseApp)

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

    
    async function handleCreatenewList(name,isbn, price,coverPic){

        const imageRef = ref(storage,`uploads/images/${Date.now()}-${coverPic.name}`)
       const uploadResult =  await uploadBytes(imageRef,coverPic)

       return await addDoc(collection(firestore,"bokks"),{
        name,
        isbn,
        price,
        imageURL:uploadResult.ref.fullPath,
        userID: user.uid,
        userEmail: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
       })


    }

    async function getData(){

        return getDocs(collection(firestore,"bokks"))

    }
    

     function getImagesUrl(path) {
        return getDownloadURL(ref(storage,path)) 
    }


    return (
        <FirebaseContext.Provider value={{signupuserWithemailandPassword,
         signinWithEmailAndPassword,
         signinWithGoogle,
         handleCreatenewList,
         getData,
         getImagesUrl,
         user,
         isloggedIn   
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

// Custom hook for easy use
export const useFirebase = () => useContext(FirebaseContext);
