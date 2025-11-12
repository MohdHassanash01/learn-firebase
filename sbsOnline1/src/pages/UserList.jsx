
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"; 
import {db} from "../config"
import { useEffect } from 'react';
import { useState } from 'react';

const UserList = () => {

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  // fetch data 

  async function getData(){

try {
 
      setLoading(true)
    const docSnap = await getDocs(collection(db,"users1"))

    // console.log(typeof docSnap);
    // console.log(docSnap.docs);
    

    const data = docSnap.docs.map((doc) => ({
      id:doc.id,
      ...doc.data()
    }))

    setUsers(data)


} catch (error) {
   console.error('Error fetching users:', error);
}finally{
  setLoading(false);
}

  }

  useEffect(() => {
    getData()
    
  },[])

  console.log("users : ",users);


  // delete data 

  async function handleDelete(id){

    console.log(id);

    try {
      
      const data = await deleteDoc(doc(db,"users1",id))
      console.log(data); // undefine
      
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

    } catch (error) {
      console.log(error);
      
    }
    

  }

  
  return (
       <div className="w-full h-screen bg-green-100">
      <div className="p-10">
        <Link className="rounded-lg border px-4 py-1" to={"/"}>
          back to home
        </Link>
      </div>

      <h1 className="text-bold text-3xl px-10 font-bold">user List...</h1>

       {loading ? (
        <p className="px-10 py-5 text-gray-600 text-2xl ">Loading...</p>
      ) : users.length === 0 ? (
        <p className="px-10 text-red-600">No users found.</p>
      ) : (
        <ul className="px-10 mt-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="border p-5 mb-2 rounded-md bg-white shadow-sm w-fit"
            >
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Name:</strong> {user.username || 'Unknown'}</p>
              <p><strong>Email:</strong> {user.email || 'No email'}</p>

<div className='flex gap-10 pt-6'>

  <button 
  onClick={() => handleDelete(user.id)}
  className='border rounded-lg px-4'>delete</button>

  <button
  onClick={() => navigate("/updateUser",{state:{user}})}
  className='border rounded-lg px-4'>update</button>
</div>

            </div>

          ))}
        </ul>
      )}
    
    </div>
  )
}

export default UserList
