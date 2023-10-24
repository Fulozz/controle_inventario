"use client"

import React from 'react'
import Sidebar from './Components/Sidebar Section/Sidebar'
import Body from './Components/Body Section/Body'
import './dashboard.css'
import Loading from '../Loading/Loading'

export const AdminDashboard = () => {
  return (
    <>
    <Loading>
        <div className='container'>
          <Sidebar />
          <Body />
        </div>
      </Loading>
    </>
  )
}
export default AdminDashboard




/// TODO