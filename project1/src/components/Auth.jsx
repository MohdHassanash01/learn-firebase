import { useEffect, useState } from "react"
import { auth, googleprovider } from "../config/firebase"
import { createUserWithEmailAndPassword , signInWithPopup, signOut} from "firebase/auth"
import { db } from "../config/firebase"
import { getDocs } from "firebase/firestore"

function Auth() {

  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")

  console.log(auth?.currentUser?.email)
  console.log(auth?.currentUser?.photoURL);
  

const signin = async () => {

try {
     const user =  await createUserWithEmailAndPassword(auth, email, password)
console.log(user);
} catch (error) {
   console.log(error);
   
}
}


const signwithGoogle = async () => {

try {
  
  await signInWithPopup(auth, googleprovider)

} catch (error) {
  console.error(error)
}
}


const logout = async () => {
   try {
    await signOut(auth)
   } catch (error) {
    console.error(error)
   }
}


const [movieList, setmovielist] = useState([])


useEffect(() => {

  const getuserList = async () => {
    
  }

},[])

  return (
   <>
   
   <div>


 <div>
      
      <input type="text" placeholder='Email....'
      onChange={(e) => setemail(e.target.value)}
      />

      <input type='text' placeholder='Password...'
      onChange={(e) => setPassword(e.target.value)}/>

<button onClick={signin} className='border-2 px-20 py-2 rounded-md'>
    Sign in
</button>

<button onClick={signwithGoogle} className='border-2 px-20 py-2 rounded-md'>
    Sign in with google
</button>



<button onClick={logout} className='border-2 px-20 py-2 rounded-md'>
    Logout
</button>

    </div>


<h1>email : {auth?.currentUser?.email} </h1>
<img src={auth?.currentUser?.photoURL} alt="" />







   </div>
   
   
   </>
  )
}

export default Auth
