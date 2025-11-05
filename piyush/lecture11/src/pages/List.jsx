import React from 'react'
import  {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {useFirebase} from "../context/Firebase"
import { useNavigate } from 'react-router-dom';




const List = () => {

    const {handleCreatenewList} = useFirebase()

    const [name, setname] = useState("")
    const [isbnNumber, setIsbnNumber] = useState("")
    const [price, setPrice] = useState("")
    const [coverPic, setCoverPic] = useState("")

    async function handleSubmit(e){

        e.preventDefault()
        console.log({
            name,
            isbnNumber,
            price,
            coverPic
        });
     await handleCreatenewList(name,isbnNumber,price,coverPic)
    }

  return (
    <>
         <div className='w-full h-screen flex justify-center items-center'>
    
    <div className='container border-2 p-10 rounded w-[500px]'>

        <h1>Add new Books</h1>
         <Form 
         onSubmit={handleSubmit}
        >


            <Form.Group className="mb-3 w-[500px]" controlId="formBasicEmail">

        <Form.Label>enter book name</Form.Label>
        <Form.Control
        onChange={(e) => setname(e.target.value)}
        type="text" placeholder="Enter book name" />
      
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ISBN</Form.Label>
        <Form.Control
        onChange={(e) => setIsbnNumber(e.target.value)}
        type="text" placeholder="enter ISBN" />
      </Form.Group>


         <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control
        onChange={(e) => setPrice(e.target.value)}
        type="" placeholder="enter Price" />
      </Form.Group>


         <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control
        onChange={(e) => setCoverPic(e.target.files[0])}
        type="file"  />
      </Form.Group>

   

      <Button
      variant="primary" type="submit">
        Submit
      </Button>



    </Form>
    </div>

    </div> 
    </>
  )
}

export default List
