import React, { useEffect, useState } from 'react'
import './user.css'
const UserProfile = () => {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState(null)
  
  useEffect(() => {
    const URLocal = "http://localhost:3001/api/v1"
    const URL = "http://10.0.50.39:3001/api/v1"
    const requestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("jwt"),
      }),
    };
    fetch(`${URL}/user`, requestInit).then((response) => {
      response.json().then((data) => {
        setUser(data.name);
        setEmail(data.email)
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