import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Dashboard/Components/Sidebar Section/Sidebar'
import Top from '../../../Dashboard/Components/Body Section/Top Section/Top'


import './Geral.css'
import computer from '../../../Dashboard/Assets/computer.png'
import { BiLink } from "react-icons/bi";
import { Link } from "react-router-dom";
import Axios from 'axios'

const Geral = () => {
  const [patrimonio, setPatrimonio] = useState([])
  useEffect(()=>{
    Axios.get('http://localhost:3000/api/v1/all').then((response)=>{
      setPatrimonio(response.data)
    })
  },[])
  return (
  <div className='listingSection'>
    <div className="flex">
 
      <div className="secContainer flex">
        {patrimonio && patrimonio.map((patrimonio, index) => (
            <div className="singleItem" key={index}>
            <h5>{patrimonio.host_name}</h5>
            <Link to={`/patrimonio/${patrimonio.patrimonio}`}>
              <BiLink className="icon" />
              </Link>
              <img src={computer} alt="Image Name" />
              <Link to={`/patrimonio/${patrimonio.patrimonio}`}>
                <h3>{patrimonio.patrimonio}</h3>
              </Link>
              </div>
          ))}   
      </div>

    
      </div>
    </div>
  )
}

export default Geral