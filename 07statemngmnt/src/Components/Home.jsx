import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../main'

function Home() {
  const { username } = useContext(AppContext);
  // Now, We dont need to pass so i will remove all the props
  return (
    <div>
        <h1 style={{margin:'auto'}}>This is the Home Page</h1>
        <h3>Welcome!{username} to the Home Page</h3>
    </div>
  )
}

export default Home