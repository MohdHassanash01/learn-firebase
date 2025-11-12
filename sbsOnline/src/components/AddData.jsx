import {app} from "../config"

import {getDatabase,ref,set} from "firebase/database"

const db = getDatabase(app)

function AddData() {

    function handleSubmit(userID,username,password){
     console.log({userID,username, password});

     set(ref(db,"user/"+ userID),{
        username,
        password
     })

     
    }

  return (
    <div>
      add data 

      <button onClick={() => (handleSubmit(123,"hassan","Mohdhshs"))}>add data</button>
    </div>
  )
}

export default AddData
