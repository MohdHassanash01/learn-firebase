import  { useState } from 'react'

import {db} from "../config"
import { collection, addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'

const AddUser = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")

   async  function submitHandler(e){
        e.preventDefault()

        console.log({
            username,
            email,
            country
        });

   try {
    
    const docRef = await addDoc(collection(db,"users1"),{
      username,
      email,
      country
    })

   if (docRef) {
    
        alert("Data successfully stored!");
   }



   } catch (error) {

     console.error("Error storing data:", error);
      alert("Failed to store data");

   }finally{
     setUsername("")
        setEmail("")
        setCountry("")
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
value={country}
onChange={(e) => setCountry(e.target.value)}
className='bg-black/80 py-1 rounded-lg pl-5 text-white'
type="text" placeholder='enter country' />

<button className='border w-fit px-4 rounded mx-auto' type="submit">Submit</button>


       </form>
      
    </div>
  )
}

export default AddUser
