import React from 'react'

import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'
export const Dashboard = () => {
  return (
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <Sidebar /> 
        <Body /> 
        <br />
        <div><a href="/">Logout</a></div>
       </div>
    </div>
  )
}
export default Dashboard




/// TODO