
import AddStudent from './components/AddStudent'
import StudentList from './components/StudentList'
import UpdateStudent from './components/Update'

import  Home  from './pages/Home'
// import AddData from './components/AddData'
import { BrowserRouter,Route, Routes } from 'react-router-dom'


function App() {

  return (
   <>

   <BrowserRouter>
   
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/addStudent' element={<AddStudent/>}/>

<Route path='/studentList' element={<StudentList/>}/>
<Route path='/update' element={<UpdateStudent/>}/>




</Routes>

   </BrowserRouter>
 
   </>
  )
}

export default App
