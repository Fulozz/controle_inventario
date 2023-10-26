import React, { useEffect, useState } from 'react'
import './activity.css'
import APIPatrimonio from '../../../../API/API.patrimonio'

//imported icons ==>
import { BsArrowRightShort } from 'react-icons/bs'

//import images
import img from '../../../../Assets/1693004941361.jpeg'
import APIUser from '../../../../API/API.user'

const Activity = () => {

  const [user, setUser] = useState(null)
  const [patrimonio, setPatrimonio] = useState([])

  useEffect(() => {
    
    APIUser().post(`/user`, {
      token: localStorage.getItem("jwt"),
    }).then((response) => {
      setUser(response.data.name)
    });
  }, []);
  
  useEffect(()=>{
    APIPatrimonio().get('/listing').then((response)=>{
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
            
            <span className="name"> {patrimonio.name}  </span>
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