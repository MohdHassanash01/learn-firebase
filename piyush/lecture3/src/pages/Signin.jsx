import React, {useState} from 'react'

import {getAuth, signInWithEmailAndPassword} from "firebase/auth"

import {app} from "../firebase"

const auth = getAuth(app)

function Signin() {

      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
    
      function handleSubmit(){
    
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password).then((value) => {
            console.log("signin success");
            
        }).catch((err) => console.log(err))
      }

  return (
    <>
          <div className="flex flex-col w-[500px] gap-5 border-2 p-10 rounded-lg">

<h1 className="font-bold text-xl text-center underline">Sign In Page</h1>

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

      </div>
    </>
  )
}

export default Signin
