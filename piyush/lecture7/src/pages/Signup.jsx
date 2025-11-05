import  { useState } from "react";

import { getAuth,
   createUserWithEmailAndPassword
   , GoogleAuthProvider,
  signInWithPopup } from "firebase/auth";
import { app } from "../firebase";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

function Signup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(){

    console.log(email, password);

    createUserWithEmailAndPassword(auth,email,password).then((value) => {
      alert("signup successfully")
      console.log(value)}
        )
  }

  function signinWithGoogle(){
    signInWithPopup(auth,googleProvider)
  }
  

  return (
    <>

      <div className="flex flex-col w-[500px] gap-5 border-2 p-10 rounded-lg">

<h1 className="font-bold text-xl text-center underline">Sign up Page</h1>

<input 
className="border-1 rounded py-1 pl-5 pr-10"
onChange={(e) => setEmail(e.target.value)}
type="text" placeholder="enter your email" />

<input 
className="border-1 rounded py-1 pl-5 pr-10"
onChange={(e) => setPassword(e.target.value)}
type="text" placeholder="enter password" />

<button 
className="border w-fit mx-auto px-10 rounded"
onClick={handleSubmit}>Register</button>


<button 
className="border w-fit mx-auto px-10 rounded"
onClick={signinWithGoogle}>Sign In with Google</button>

      </div>
    </>
  );
}

export default Signup;
