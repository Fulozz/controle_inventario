import React, { useEffect, useState } from "react";
import "./listing.css";;
import Axios from 'axios'
// imported icons;
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {FiEdit} from 'react-icons/fi'

import { Link } from "react-router-dom";
//imported image
import computer from "../../../Assets/computer.png";




const Listing = () => {

  const [patrimonio, setPatrimonio] = useState([])
  
  const [isVisible, setIsVisible] = useState(false);

  const [singlePatrimonio, setSinglePatrimonio] = useState()

  useEffect(()=>{
    Axios.get('http://localhost:3000/api/v1/patrimonio/:id').then((response)=>{
      setPatrimonio(response.data)
    })
  },[])
  useEffect(()=>{
    Axios.get('http://localhost:3000/api/v1/listing').then((response)=>{
      setPatrimonio(response.data)
    })
  },[])


  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>Ultimas inclusões</h1>
        <a className="btn flex" href="/todos">
          Ver todos <BsArrowRightShort className="icon" />
        </a>
      </div>
     
      <div className="secContainer flex">
        {patrimonio && patrimonio.map((patrimonio, index) => (
            <div className="singleItem" key={index}>
            <h5>{patrimonio.host_name}</h5>
              <button  onClick={()=>{
              setIsVisible(true)
              setSinglePatrimonio(patrimonio)
            }} >
              <AiOutlineEye className="icon" />
              </button>
              <img src={computer} alt="Image Name" />
              <Link to={"/geral"}>
                <h3>{patrimonio.patrimonio}</h3>
              </Link>
              </div>
          ))}   
      </div>
      {isVisible && (
        <div className="modal" style={{ zIndex: 100}}>
          <div className="modal-content">
            <div className="modal-top">
                <h1>{singlePatrimonio.host_name}</h1>
                  <button  onClick={()=>{
                    setIsVisible(false)
                  }} >
              <AiOutlineEyeInvisible className="icon" />
              </button>            
                </div>
                <div className="modal-item">
                    <h2>Informações</h2>
                        <h3> <strong> Patrimonio: </strong>{singlePatrimonio.patrimonio}</h3>
                        <h3> <strong> Categoria: </strong> {singlePatrimonio.categoria}</h3>
                        <h3> <strong> Número de série:  </strong>{singlePatrimonio.serial_number}</h3>
                        <h3> <strong> Marca:  </strong>{singlePatrimonio.marca}</h3>
                        <h3> <strong> Modelo:  </strong>{singlePatrimonio.modelo}</h3>
                    <h2><strong>Hardware</strong></h2>
                        <h3><strong>CPU:</strong> {singlePatrimonio.cpu}</h3>
                        <h3><strong>GPU:</strong> {singlePatrimonio.gpu}</h3>
                        <h3><strong>Memoria:</strong> {singlePatrimonio.memoriaRam} {singlePatrimonio.memoriaRamDDR}</h3>
                    </div>

                <div className="modal-bottom">
                
                  <button  onClick={()=>{
                    setIsVisible(false)
                  }} >
              <FiEdit className="icon" />
              </button>            
                </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Listing;
