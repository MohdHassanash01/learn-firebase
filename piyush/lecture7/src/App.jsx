import React, { useEffect, useState } from 'react'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { app } from './firebase'

const auth = getAuth(app)

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {

    onAuthStateChanged(auth,(user) => {
      if (user) {
        console.log(user);
        
        setUser(user)
      }else{
        console.log("you are logged out");
        
        setUser(null)
      }
    })
  },[])

async function handleLogout(){
  await signOut(auth)
  setUser(null)
}

if(!user){
    return (
    <div className='w-full min-h-screen bg-green-300 flex flex-col gap-30'>

      <Signup/>
      <Signin/>
      
    </div>
  )
}

  return <>
  

  <div className='w-full min-h-screen bg-green-300 '>

{user.email}

   <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>

  </div>
  
  </>

}

export default App
