import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState,useEffect} from 'react'
import lifecycleIMG from './assets/Compolifecycle.png'

// the useEffect hook is use to control the lifeCycle of the components
// We can make actions that can be trigger when the component is either mounting,updating,unmounting
function App() {
  useEffect(() => {
  // for mounting
    console.log("Component Mounted");
    // it is console logged 2 times if strict mode rendering is enabled
    /*
    used for fetching API data call 
    Whenever this App component get updated , the useEffect is called by itself
    */
  // for updating
   /*
   We also can customize in such wat that useEffect hook will be executing depending upon the condition of lifecycle
   It receivers through empty array , called dependencies array
   In the array you can pass the state , so when the state changes the useEffect hook gets executed
   */
  // for unmounting
  /*
  the useEffect uses the return function that can be consider for unmounting
  We, can return a function that can be executed when the component gets unmounted
  */
    return () => {
      console.log("Component Unmounted");
    }
  }, [])
  // used for stopping the Api Calls
  return (
    <>
      <div className='forComponentLife-CycleIMG' style={{ border:'2px solid white',borderRadius:'50px', width: '600px', height: '450px',  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={lifecycleIMG} alt="This is the Image of Component LifeCycle"  style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', objectPosition: 'center'}}/>
      </div>
    </>
  )
}

export default App
