import React from 'react'

import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'
export const UserProfile = () => {
  return (
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <h1>Esse é o componente user Profile</h1>
        <Sidebar /> 
        <Body /> 
        <br />
        
        <div><a href="/">Logout</a></div>
       </div>
    </div>
  )
}
export default UserProfile




/// TODO