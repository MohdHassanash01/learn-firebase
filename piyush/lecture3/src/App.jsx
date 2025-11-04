
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "./firebase"
import Signup from "./pages/Signup";


const auth = getAuth(app)


function App() {


  function signup(){

    createUserWithEmailAndPassword(auth,"hassan@gmail.com","Mohdhshs").then((value) => console.log(value)
    )

  }

  return (
    <>
   <div>
<h1>Firebase React App</h1>

<Signup/>

   </div>
    </>
  )
}

export default App
