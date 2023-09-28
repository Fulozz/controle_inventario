import React, { useState } from 'react'
import { logout } from '../AuthProvider/AuthTS/utils'
import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'

import Axios from 'axios';

import { useNavigate } from 'react-router-dom'
// const jwt = require('jsonwebtoken')
export const AdminDashboard = () => {
  const navigateTo = useNavigate()
  
  

  // Fazer a requisição POST
  const getUser = ()=>{
    Axios.get('http://localhost:3000/api/v1/')
  };
    
    const LogoutUser = async (e) => {
      logout();
      navigateTo('/');
    };
  
  return (
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <h1>AREA DOS ADMINISTRADORES</h1>
        <Sidebar /> 
        <Body /> 
        
        <br />
            <button type='submit' className='btn flex' onClick={LogoutUser}>
                <span>\Logout!</span>
            </button>
       </div>
    </div>
  )
}
export default AdminDashboard




/// TODO