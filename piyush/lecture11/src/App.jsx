import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"

import NavbBar from "./components/Navbar"
import List from "./pages/List"
function App() {
 
  return (
  <>

<BrowserRouter>
<NavbBar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/signup" element={<Signup/>} />
<Route path="/signin" element={<Signin/>} />
<Route path="/addBooks" element={<List/>} />


</Routes>

</BrowserRouter>

  </>
  )
}

export default App
