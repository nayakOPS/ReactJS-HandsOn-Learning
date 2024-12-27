import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../main'

function ChangeProfile() {
  const { setUsername } = useContext(AppContext);

  const [ newUsername, setNewusername] = useState("");
  return (
    <div> --ChangeProfile-- 
      <input onChange={(event)=> {setNewusername(event.target.value)}}/>
      {/* So,when i Click the change username , i want to access the setUsername which is fucntion defines inside the useState hook inside the const Root component  */}
      {/* So, to access it */}
      {/* So, we are inside of the Profile tag as ChangeProfile  and the profile is inside the app*/}
      <button onClick={() => {setUsername(newUsername)}}>Change Username</button>
    </div>
    // This whole process of passing the props has become messy and untidy and props are being accepted by component that doesnot even need but it is passed to give it to its child compoent
    // So We will be using UseContext Hook
  )
}

export default ChangeProfile