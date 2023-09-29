import './App.scss'

import  Dashboard from './Components/Dashboard/Dashboard.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import UserProfile from './Components/UserProfile/UserProfile'
import PrivateRoutes from './utils/ProtectedRoute'


import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'

  

// router


function App() {
  
 

  return (
    <div>
      <Router>
        <Routes>
          <Route Component={Login} path='/' exact/>
          <Route Component={Register} path='/register' exact/>
            <Route element={<PrivateRoutes/>}>
              <Route Component={Dashboard} path='/dashboard' exact/>
              <Route Component={UserProfile} path='/profile' exact/>
            </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App