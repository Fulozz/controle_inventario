import React, { useState } from 'react'
import { logout } from '../AuthProvider/AuthTS/utils'
import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'

import Axios from 'axios';

import { useNavigate } from 'react-router-dom'
// const jwt = require('jsonwebtoken')
export const AdminDashboard = () => {
  const navigateTo = useNavigate()
  const [profileUser, setProfileUser] = useState({
    name: '',
    email: '',
  });
  const userData = JSON.parse(localStorage.getItem('jwt'))
  const email = userData.email
  const token = userData.token

  // Fazer a requisição POST
  Axios.get(`http://localhost:3000/api/v1/dashboard`, {
    token: token,
    email: email
  })
    .then((response) => {
      if(response.status === 200){
        console.log('APROVADO');
      }
      

      // Validar o token
      else if (response.status != 200) {
        // Token inválido
        console.log("TA ACONTECENDO PROBLEMA");
      }

      // Obter as informações do usuário
      const userUtils = response.data;

      // Atualizar o estado com as informações do usuário
      setProfileUser({
        name: userUtils.name,
        email: userUtils.email,
      });
    })
    .catch((err) => {
      // Erro ao validar o token
      console.log(err);
    });
    
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