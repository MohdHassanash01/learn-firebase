import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import AddUser from "./pages/AddUser"
import UserList from "./pages/UserList"
import UpdateUser from "./pages/UpdateUser"

function App() {

  return (

    <>
    
       <BrowserRouter>
   
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/addUser' element={<AddUser/>}/>

<Route path='/userList' element={<UserList/>}/>
<Route path='/updateUser' element={<UpdateUser/>}/>




</Routes>

   </BrowserRouter>
 
    </>
  
  )
}

export default App
