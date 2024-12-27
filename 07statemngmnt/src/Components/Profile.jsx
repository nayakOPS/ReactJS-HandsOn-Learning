import React from 'react'
import ChangeProfile from './ChangeProfile'
import { useContext } from 'react'
import { AppContext } from '../main'

function Profile(){
  const { username } = useContext(AppContext);
  return (
    <div>
        <h1 style={{margin:'auto'}}>This is the Profile Page</h1>
        <h3>Welcome!{username} to the Profile Page 
        <ChangeProfile/>
        </h3>
    </div>
  )
}

export default Profile