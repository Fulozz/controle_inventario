import React, { useEffect, useState } from 'react'
import './user.css'
const UserProfile = () => {
  const [user, setUser] = useState(null)


  useEffect(() => {
    const requestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("jwt"),
      }),
    };
    fetch("http://localhost:3000/api/v1/user", requestInit).then((response) => {
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
                        
          </div>    
      </div>
    </div>
  )
}

export default UserProfile