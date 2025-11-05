import React from 'react'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-green-300 flex flex-col gap-30'>

      <Signup/>
      <Signin/>
      
    </div>
  )
}

export default App
