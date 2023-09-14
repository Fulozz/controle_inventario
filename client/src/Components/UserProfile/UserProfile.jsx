import React from 'react'

import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'
import { logout } from '../AuthProvider/AuthTS/utils'
import {  useNavigate} from 'react-router-dom'

import { Api } from '../../Services/API'

export const UserProfile = () => {
  // const [userStatus, setUserStatus] = useState(true)
  //  window.onload= function(){
  //   const json = localStorage.getItem('u')
  //   if(!json){
  //     return (
  //       null, 
  //       navigateTo('/'),
  //       setUserStatus(false),
  //       console.log(json)
  //       )
  //   } 
  //   const user = JSON.parse(json)

   Api.post('/useraccsess',{
    token: localStorage.getItem("u", ["token"])
   }, function(req, res, next) {
    
   });
   
  const navigateTo = useNavigate('')
  const LogoutUser = async (e)=> {
    logout()
    navigateTo('/')
  }

  return (
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <h1>Esse é o componente user Profile</h1>
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
export default UserProfile




/// TODO