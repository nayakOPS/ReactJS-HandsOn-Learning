import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Contact from './Pages/Contact.tsx'
import Home from './Pages/Home.tsx'
import Login from './Pages/Login.tsx'


import { Provider } from 'react-redux'
import { store } from './store.ts'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'contact',
        element:<Contact/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
