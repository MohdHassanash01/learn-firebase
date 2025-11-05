import  { useState } from "react";
import {useFirebase} from "../context/Firebase"

function Signup() {

  const {signupUserWithEmailAndPassword, putData} = useFirebase()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignUp(){
    const value = await signupUserWithEmailAndPassword(email,password)
    console.log(value);
    await putData("users/"+ "hassan" , { email, password})
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
onClick={handleSignUp}
className="border w-fit mx-auto px-10 rounded"
>Register</button>


      </div>
    </>
  );
}

export default Signup;
