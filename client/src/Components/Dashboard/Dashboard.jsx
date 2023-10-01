"use client"

import React from 'react'
import { logout } from '../AuthProvider/AuthTS/utils'
import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'
import { useNavigate } from 'react-router-dom'

import './dashboard.css'



// const jwt = require('jsonwebtoken')
export const AdminDashboard = () => {



   
    
  
  return (
    <>    
        <div className='container'>
            <Sidebar /> 
              
              

              <Body /> 
             
          </div>
    </>
  )
}
export default AdminDashboard




/// TODO