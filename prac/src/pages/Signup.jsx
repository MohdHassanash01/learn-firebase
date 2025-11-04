import React, {useState} from 'react'

import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"

import {app} from "../config/firebase"

const auth = getAuth(app)

function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {

        console.log(email, password);
        createUserWithEmailAndPassword(auth,email,password).then((value) => {

          console.log(value);
          

        })

    }

  return (
          <div className="flex flex-col w-[500px] gap-5 border-2 p-10 rounded-lg">

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
  )
}

export default Signup
