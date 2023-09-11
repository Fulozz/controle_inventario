import React from 'react'

import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'
export const AdminDashboard = () => {
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