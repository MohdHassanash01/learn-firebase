import  { useState } from 'react'
import { Link } from 'react-router-dom'

import {app} from "../config"

import { getDatabase,ref,set,push } from 'firebase/database'

const db = getDatabase(app)


function AddStudent() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   async  function submitHandler(e){
        e.preventDefault()

        console.log({
            username,
            email,
            password
        });

   try {
    
      await set(push(ref(db,"users")),{
            username,
            email,
            password
        })

    alert("Data successfully stored!");

   } catch (error) {

     console.error("Error storing data:", error);
      alert("Failed to store data");

   }finally{
     setUsername("")
        setEmail("")
        setPassword("")
   }

    }

  return (
    <div className='w-full h-screen bg-green-100 '>

       <div className='p-10'>
         <Link to="/"
        className='border rounded-lg px-4 py-1'
        >back to home</Link>
       </div>

       <form onSubmit={submitHandler}
       className='border-2 p-5 w-[600px] flex flex-col mx-auto rounded-lg gap-4'
       >

<input
required
value={username}
onChange={(e) => setUsername(e.target.value)}
type="text" placeholder='enter username'
className='bg-black/80 py-1 rounded-lg pl-5 text-white' />

<input
required
value={email}
onChange={(e) => setEmail(e.target.value)}
className='bg-black/80 py-1 rounded-lg pl-5 text-white'
type="email" placeholder='enter email' />

<input
required
value={password}
onChange={(e) => setPassword(e.target.value)}
className='bg-black/80 py-1 rounded-lg pl-5 text-white'
type="password" placeholder='enter password' />

<button className='border w-fit px-4 rounded mx-auto' type="submit">Submit</button>


       </form>
      
    </div>
  )
}

export default AddStudent
