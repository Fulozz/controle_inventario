import React from 'react'

import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'

// import { useNavigate, useState } from 'react-router-dom'
// const jwt = require('jsonwebtoken')
export const AdminDashboard = () => {

  // const navigateTo = useNavigate('')
  // const [authStatus, setAuthStatus] = useState(true)
  // const item = JSON.parse(localStorage.getItem('u'))
  // const preAuthToken = item[0]
  // const authToken = jwt.decode(preAuthToken, `${process.env.SECRET_KEY}`)
 
  // useEffect(() => {
  //   if (authToken == false) {
  //     return setAuthStatus(false), navigateTo('/')
  //     } 
  //   })[authStatus]
  
  return (
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <h1>AREA DOS ADMINISTRADORES</h1>
        <Sidebar /> 
        <Body /> 
        
        <br />
        <div><a href="/">Logout</a></div>
       </div>
    </div>
  )
}
export default AdminDashboard




/// TODO