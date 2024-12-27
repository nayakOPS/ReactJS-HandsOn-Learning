import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// importing react router dom essentials
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
// importing pages component
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Profile from './Components/Profile.jsx'

import { useState, createContext } from 'react'

// Whenever you have a group of component accessing the same props make global context

export const AppContext = createContext();

const Root = () => {
  const [username, setUsername] = useState("Binayak Kunwor : Front End Intern")

  const router = createBrowserRouter([
    {
      path:'/',
      // We dont need to pass the props to each individual element cause There is a context provider for whole group
      // element:<App username={username}/>,
      element:<App/>,
      children: [
        {
          path:'home',
          // element:<Home username={username}/>
          element:<Home/>
        },
        {
          path:'About',
          element:<About/>
        },
        {
          path:'Profile',
          // element:<Profile username={username} setUsername={setUsername}/>
          element:<Profile/>
        }
      ],
    },
  ]);
  return (
      <React.StrictMode>
      <AppContext.Provider value={{username, setUsername}}>
          <RouterProvider router={router}/>
      </AppContext.Provider>
      </React.StrictMode>
  );
}
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App username={username}/>,
//     children: [
//       {
//         path:'home',
//         element:<Home username={username}/>
//       },
//       {
//         path:'About',
//         element:<About/>
//       },
//       {
//         path:'Profile',
//         element:<Profile username={username}/>
//       }
//     ],
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(<Root/>)
