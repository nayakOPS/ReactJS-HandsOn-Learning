import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        // / not needed cause it is there already in parrent App component
        // dont need to mention home cause home is needed to be defaultly rendered
        path:'',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'github',
        element:<Github/>,
        // loader:{githubInfoLoader}
      },
      {
        path:'user/:userid',
        element:<User/>
      }
    ]
  },
])

// simple method to make the routing process
/*
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      // loader le k garch bhanda kheri , when you need to fetch any API directly you can call the API from Loader
      // you can write your whole api call inside the loader
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* router chai props ho = {router} chai attribute ho of router variable */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
);