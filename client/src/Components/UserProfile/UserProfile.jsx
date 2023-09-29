import React,  { useState } from 'react'

import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'
import { logout } from '../AuthProvider/AuthTS/utils'
import {  useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import Axios from 'axios'
export const UserProfile = ()  => {
 
  const navigateTo = useNavigate()
  const [profileUser, setProfileUser] = useState({
    name: '',
    email: '',
  });
  const userData = JSON.parse(localStorage.getItem('jwt'))
  const email = userData.email
  const token = userData?.token

  // Fazer a requisição POST
  Axios.get(`http://localhost:3000/api/v1/profile`, {
    token: token,
    email: email
  })
    .then((response) => {

      console.log('PASSOU AQUI');

      // Validar o token
      if (response.status != 200) {
        // Token inválido
        console.log("TA ACONTECENDO PROBLEMA");
      }

      // Obter as informações do usuário
      const userData = response.data;

      // Atualizar o estado com as informações do usuário
      setProfileUser({
        name: userData.name,
        email: userData.email,
      });
    })
    .catch((err) => {
      // Erro ao validar o token
      console.log(err);
    });
useEffect(() => {

  // Obter o ID do usuário e token
  
  
}, [profileUser]); // Executa apenas uma vez ao montar o componente

const LogoutUser = async (e) => {
  logout();
  navigateTo('/');
};

  return (
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <h1>Esse é o componente user Profile</h1>
        <div>
          {/* Renderizar a informação do usuário aqui */}
          <h1>Nome: {profileUser.name}</h1>
          <p>E-mail: {profileUser.email}</p>
        </div>
        <br />
        <Sidebar /> 
        <Body /> 
        <br />
        
        <button type='submit' className='btn flex' onClick={LogoutUser}>
                <span>Logout!</span>
        </button>
       </div>
    </div>
  )
}
export default UserProfile
