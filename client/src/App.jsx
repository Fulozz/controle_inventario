import { useEffect, useState } from 'react'
import './App.css'

import Dashboard from './Components/Dashboard/page.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import UserProfile from './Components/UserProfile/UserProfile'



import{ BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Write from './Components/Write/Write'

import Todos from './Components/Geral/Todos'

  

// router


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  
  const statusValidate = async()=>{
    const URL = "http://10.0.50.39:3001/api/v1";
    const URLocal = "http://localhost:3001/api/v1";
    const requestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: localStorage.getItem('jwt')
        }),
      };
    const response = await fetch(`${URL}/validate`, requestInit)
    if(response.status !== 200) {
      return <Navigate to= "/" />, localStorage.clear(), setIsAuthenticated(false);
    }return setIsAuthenticated(true)  
  } 
 
  useEffect(() => {
    statusValidate()
  }, [])
  


  return (
    <div>
      <Router>
        <Routes>

        <Route element={<Login />} path='/' exact/>

          <Route element={isAuthenticated ? <Register /> : <Navigate to="/" />} path='/register'exact/>
          <Route element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} path='/dashboard'exact/>
          <Route element={isAuthenticated ? <UserProfile /> : <Navigate to='/' />} path='/profile' exact/>
          <Route element={isAuthenticated ? <Write /> : <Navigate to='/' />} path='/write' exact/> 
          <Route element={isAuthenticated ? <Todos /> : <Navigate to='/' />} path='/todos' exact/> 
       
        </Routes>
      </Router>
    </div>
  )
}

export default App