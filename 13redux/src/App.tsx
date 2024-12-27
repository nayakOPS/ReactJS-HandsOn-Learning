import './App.css'
import NavHeader from './components/NavHeader'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
     <h1>Luli khaleyy Idhar</h1>
      <NavHeader/>
      <Outlet/>
    </>
  )
}

export default App
