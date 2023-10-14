import { useEffect, useState } from 'react'
import './App.css'

import Dashboard from './Components/Dashboard/page.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import UserProfile from './Components/UserProfile/UserProfile'



import{ BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Write from './Components/Write/Write'

  

// router


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  
  const statusValidate = async()=>{
    
    const requestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: localStorage.getItem('jwt')
        }),
      };
    const response = await fetch('http://localhost:3000/api/v1/validate', requestInit)
    if(response.status !== 200){
      return <Navigate to='/' />, localStorage.clear(), setIsAuthenticated(false)
    } else{
      return <Navigate to='/dashboard' />, setIsAuthenticated(true) 
    }
    
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
           
        </Routes>
      </Router>
    </div>
  )
}

export default App