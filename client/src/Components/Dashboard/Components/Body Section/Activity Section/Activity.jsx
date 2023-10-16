import React, { useEffect, useState } from 'react'
import './activity.css'

//imported icons ==>
import { BsArrowRightShort } from 'react-icons/bs'


//import images
import img from '../../../Assets/1693004941361.jpeg'

const Activity = () => {
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
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Atividade recente</h1>
        <button className='btn flex'>
          Veja tudo
          <BsArrowRightShort className='icon' />
        </button>
      </div>
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={img} alt="User image" />
          <div className="customerDetails">
            
            <span className="name"> {user}  </span>
            <small> incluiu: Computador</small>
          </div>
          <div className="duration">
            2min atras
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img} alt="User image" />
          <div className="customerDetails">
            <span className="name">Thiago Silva Andrade  </span>
            <small> incluiu: um computador</small>
          </div>
          <div className="duration">
            2min atras
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img} alt="User image" />
          <div className="customerDetails">
            <span className="name">Thiago Silva Andrade  </span>
            <small> incluiu: um computador</small>
          </div>
          <div className="duration">
            2min atras
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity