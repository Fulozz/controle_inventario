import React, { useEffect, useState } from 'react'
import './activity.css'
import API from '../../../../API/API'
//imported icons ==>
import { BsArrowRightShort } from 'react-icons/bs'


//import images
import img from '../../../../Assets/1693004941361.jpeg'

const Activity = () => {
  const URLocal = "http://localhost:3001/api/v1"
  const URL = "http://10.0.50.39:3001/api/v1"
  const [user, setUser] = useState(null)
  const [patrimonio, setPatrimonio] = useState([])

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
    fetch(`${URL}/user`, requestInit).then((response) => {
      response.json().then((data) => {
        setUser(data.name);
      });
    });
  }, []);
  
  useEffect(()=>{
    API().get('/listing').then((response)=>{
      setPatrimonio(response.data)
    })
  },[]);

  

  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Atividade recente</h1>
        <button className='btn flex'>
          Veja tudo
          <BsArrowRightShort className='icon' />
        </button>
      </div>

      
      <div className="secContainer grid">

      {patrimonio && patrimonio.map((patrimonio, index) => (
        <div className="singleCustomer flex" key={index}>
          <img src={img} alt="User image" />
          <div className="customerDetails">
            
            <span className="name"> {user}  </span>
            <small> Incluiu: {patrimonio.categoria} - Nº {patrimonio.patrimonio}</small>
          </div>
          <div className="duration">
            {patrimonio.createdAtFormat}
          </div>
        </div>
      
      ))}
        
      </div>
    </div>
  )
}

export default Activity