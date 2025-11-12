import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
       <div className='w-full h-screen bg-yellow-100'>

        <div>
            <h1 className='p-15 font-bold text-xl'>Firestore database</h1>

<div className='flex gap-10 px-15'>
    <Link
    className='px-3 py-1 border rounded-lg'
    to={"/addUser"}>add user</Link>

    
     <Link
    className='px-3 py-1 border rounded-lg'
    to={"/userList"}>User List</Link>

</div>

        </div>
      
    </div>
  )
}

export default Home
