import React, { useEffect, useState } from "react";
import "./listing.css";;
import API from '../../../../API/API.patrimonio'
// imported icons;
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineClose, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineSave } from "react-icons/ai";
import {FiAlertTriangle, FiEdit} from 'react-icons/fi'

import { Link } from "react-router-dom";


//imported image
import computer from "../../../../Assets/categorias/computer.png";
import notebook from "../../../../Assets/categorias/notebook png.png";
import impressora from "../../../../Assets/categorias/impressora png.png";
import monitor from "../../../../Assets/categorias/monitor png.png";
import telefone from "../../../../Assets/categorias/telefone png.png";
import switchI from "../../../../Assets/categorias/switch png.png";
import server from "../../../../Assets/categorias/server png.png";



import { useForm } from "react-hook-form";
import Card from "../../../../../View/Card/Card";
import Images from "../../../../../View/Imagens/Images";





const Listing = () => {

    const [patrimonio, setPatrimonio] = useState([])
    useEffect(()=>{
      API().get('/listing').then((response)=>{
        setPatrimonio(response.data)
      })
    },[])


  const [isVisible, setIsVisible] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [singlePatrimonio, setSinglePatrimonio] = useState()




return (
  <div className="listingSection">
    <div className="flex">
      <div className="secContainer flex">
        {patrimonio &&
          patrimonio.map((patrimonio, index) => (
            <div className="singleItem" key={index}>
              <h5>{patrimonio.host_name}</h5>
              <button
                onClick={() => {
                  setIsVisible(true);
                  setIsEditable(true);
                  setSinglePatrimonio(patrimonio);
                }}
              >
                <AiOutlineEye className="icon" />
              </button>
              <Images patrimonio={patrimonio.categoria} />
              <Link
                onClick={() => {
                  setIsEditable(false);
                  setIsVisible(true);
                }}
              >
                <h3>{patrimonio.patrimonio}</h3>
              </Link>
            </div>
          ))}
      </div>
      {isVisible && (
       <Card singlePatrimonio={singlePatrimonio} setIsVisible={setIsVisible} />
      )}
    </div>
  </div>
);
};

export default Listing;
