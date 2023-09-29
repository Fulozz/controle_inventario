

import { Axios } from 'axios'
import './App.scss'

import  Dashboard from './Components/Dashboard/Dashboard.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import UserProfile from './Components/UserProfile/UserProfile'



import{ createBrowserRouter, RouterProvider } from 'react-router-dom'

  

// router
function goToLogin(){
    
    window.location.href = '/'
  }

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
    const response  = await fetch('http://localhost:3000/api/v1/validate', requestInit,
    {
      validateStatus: function (status) {
        return status === 200 || status === 404 || status === 401 ; // Trate 404 como bem-sucedido
      },
    } )
    if (response.status === 200) {
      return true;
    } 
    if (response.status === 400) {
      return false;
    } 
    if (response.status === 401) {
      
      return false;
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
        element:  <> {status === true ? <Login /> : <Dashboard /> } </>,
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