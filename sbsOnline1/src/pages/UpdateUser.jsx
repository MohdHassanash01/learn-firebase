import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import {db} from "../config"
import { doc, updateDoc } from 'firebase/firestore'

const UpdateUser = () => {

  const navigate = useNavigate("")
  const location = useLocation()
  // console.log(location);
  
  const data = location.state.user
  // console.log(data);
  

    const [username, setUsername] = useState(data.username)

    const [email, setEmail] = useState(data.email)

    const [country, setcountry] = useState(data.country)


   async  function submitHandler(e){
        e.preventDefault()

        console.log({
            username,
            email,
            country
        });

   try {
    
     const docRef = doc(db,"users1",data.id)

    const updatedData = await updateDoc(docRef,{
      username,
      email,
      country
    })

    console.log("updated data :",updatedData);
    

    alert("Data successfully update!");
    navigate("/userList")

   } catch (error) {

     console.error("Error storing data:", error);
      alert("Failed to store data");

   }finally{
     setUsername("")
        setEmail("")
        setcountry("")
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
onChange={(e) => setcountry(e.target.value)}
className='bg-black/80 py-1 rounded-lg pl-5 text-white'
type="password" placeholder='enter password' />

<button className='border w-fit px-4 rounded mx-auto' type="submit">Update</button>


       </form>
      
    </div>
  )
}

export default UpdateUser
