import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Problem from './Problem'

import { Outlet } from 'react-router-dom'

import Header from './Components/Header'

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <br />
    <h3>This is the Problem Figure of Props Drilling</h3>
    <Problem/>
    </>
  )
}

export default App
