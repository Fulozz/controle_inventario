

import { Axios } from 'axios'
import './App.scss'

import  Dashboard from './Components/Dashboard/Dashboard.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import UserProfile from './Components/UserProfile/UserProfile'



import{ createBrowserRouter, RouterProvider } from 'react-router-dom'

  

// router


function App() {
  
  const validate = async ()=>{

    const requestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('jwt')
      }),
    };
    const response  = await fetch('http://localhost:3000/api/v1/validate', requestInit )
    if (response.status === 200) {
      return status === 'authenticated';
    } if(response.status === 401){
      return status === 'unauthenticated';
    }
  }; 
  const { status } = validate()
 

    const router = createBrowserRouter([
      {
        path: '/',
        element: <> <Login /> </>
      },
      {
        path: '/register',
        element: <> <Register /> </>
      },
      {
        path: '/dashboard',
        element:  <> {status === "unauthenticated" ? ( window.location.href = '/' ): ( <Dashboard /> )} </>,
      },
      {
        path: '/userprofile',
        element: <> <UserProfile /> </>,
      }
    ])


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App