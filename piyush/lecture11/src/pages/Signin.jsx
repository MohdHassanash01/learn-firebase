import React , {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {useFirebase} from "../context/Firebase"
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const navigate = useNavigate()

    const {
        signinWithEmailAndPassword
        ,signinWithGoogle,
        isloggedIn
    } = useFirebase()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {

        if (isloggedIn) {
            navigate("/")
        }

    },[navigate,isloggedIn])

    async function handleSubmit(e){
        e.preventDefault()

        console.log({email, password});
        const user = await signinWithEmailAndPassword(email,password)

        console.log(user);
        
        
    }


    async function signinwithGoogle() {
       const user =  await signinWithGoogle()
       console.log(user);
       
    }

    
  return (

    <div className='w-full h-screen flex justify-center items-center'>
    
    <div className='container border-2 p-10 rounded w-[500px]'>

        <h1>Login....</h1>
         <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 w-[500px]" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        onChange={(e) => setEmail(e.target.value)}
        type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        onChange={(e) => setPassword(e.target.value)}
        type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button
     
      variant="primary" type="submit">
        Submit
      </Button>

<br />

<Button
onClick={signinwithGoogle}
variant='danger'>
    sign in with Google
</Button>

    </Form>
    </div>

    </div>
  )
}

export default Signin
