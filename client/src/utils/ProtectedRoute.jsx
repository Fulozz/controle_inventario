import { Axios } from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const [status, setStatus] = useState(false);
  const validate = async()=>{
    const requestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: localStorage.getItem('jwt')
        }),
      };
    const response = fetch('http://localhost:3000/api/v1/validate', requestInit)
    return response
  }
  useEffect(() => {
    if (status === false) {
      validate().then((response) => {
        setStatus(response.ok);
        console.log(response.ok)
        console.log(status)
      });
    }
  }, [status]);
     
        let auth = status
        return (
            auth ? <Outlet /> : <Navigate to='/'/>
        )
}

export default PrivateRoutes