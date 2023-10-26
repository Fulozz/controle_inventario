import React, { useEffect, useState } from 'react'
import './user.css'
import APIUser from '../../../API/API.user'
const UserProfile = () => {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState(null)
  
  useEffect(() => {
    
    APIUser().post(`/user`, {
      token: localStorage.getItem("jwt"),
    }).then((response) => {
      response.json().then((data) => {
        setUser(data.name);
      });
    });
  }, []);
  return (
    <div className="userProfile">
      <div className='user-content'>
          <div className="user-item">          
            <h4>Autenticado :</h4>
            <h3>{user}</h3>
            <h6>{email}</h6>            
                        
          </div>    
      </div>
    </div>
  )
}

export default UserProfile