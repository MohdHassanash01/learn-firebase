import { getFirestore, collection, addDoc, doc, getDoc, query, where, getDocs,updateDoc } from "firebase/firestore";
import { app } from "./firebase"

const Firestore = getFirestore(app)

function App() {

  const writeData  = async () => {

   const data =  await addDoc(collection(Firestore,"cities"),{
      name:"Lucknow",
      pinkcode:1234,
      long: 456
    })

    console.log(data);
  }



    const makeSubCollection  = async () => {

   const data =  await addDoc(collection(Firestore,"cities/8lDUDAgvmtuRpewl6wAw/places"),{
      name:"molviganj",
      pinkcode:226018,
      long: 456
    })

    console.log(data);
  }

  // read data

  async function getDocument(){
    const ref = doc(Firestore,"users","4FHl67wsuWQWuDnw2mnl")
   const snap =  await getDoc(ref)
   console.log(snap.data());
   
  }


  const getDocumentByquery = async() => {

    const collectionRef = collection(Firestore, "users")

    const q = query(collectionRef,where("isGraduated","==",true))

   const snap =  await getDocs(q)

   snap.forEach((user) => console.log(user.data())
    )

  }



  const updateDocs = async () => {

    const docRef = doc(Firestore, "users","4FHl67wsuWQWuDnw2mnl")

    const user = await updateDoc(docRef,{
      name:"Mohd ashraf"
    })
    console.log(user);
    
  }



  return (
    <>
  <div className='w-full h-screen bg-amber-100'>

    <button
    onClick={writeData}>put data</button>

    <button onClick={makeSubCollection}>add sub data</button>

<br />

 <button onClick={getDocument}>get Data</button>

<br />

 <button onClick={getDocumentByquery}>get document by query</button>

<br />

  <button onClick={updateDocs}>update</button>

  </div>
    </>
  )
}

export default App
