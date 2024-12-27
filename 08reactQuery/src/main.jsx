import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Contact from './pages/Contact.jsx'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// react Query le chai k garca automaticaly bhanda when you switch tab it refreshes the page and fetch the data again 
// you can avoid it using defaultoptions thrugh the queryclient()
const client = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
    },
  },
});
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
        path:'profile',
        element:<Profile/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
