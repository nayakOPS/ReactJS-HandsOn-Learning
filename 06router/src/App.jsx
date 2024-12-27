import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// A tag is not used for linking caused it reloads/refresh the page,but in react we are not doing tha
// We will be using Link tag so , the page will not be refreshed only it will change the dedicated DOM

// routing is done by nesting all is inside / which is home 
function App() {
  return (
    <>
    <Header/>
      {/* Dynamically Passing the required component/Outlet/layout here*/}
      {/* Outlet is given by the react-router-dom it is default service */}
      <Outlet/>
    <Footer/>
    </>
  )
}

export default App