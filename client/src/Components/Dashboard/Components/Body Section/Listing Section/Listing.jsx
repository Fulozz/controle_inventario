import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// API
import APIPatrimonio from '../../../../../API/API.patrimonio'
// Estilização
import "./listing.css";;
// imported icons;
import { AiOutlineEye } from "react-icons/ai";
// Views
import Card from "../../../../../View/Card/Card";
import Images from "../../../../../View/Imagens/Images";


const Listing = () => {

    const [patrimonio, setPatrimonio] = useState([])
    useEffect(()=>{
        APIPatrimonio().get('/listing').then((response)=>{
        setPatrimonio(response.data)
      })
    },[])

  const [isVisible, setIsVisible] = useState(false);
  const [singlePatrimonio, setSinglePatrimonio] = useState()




return (
  <div className="listingSection">
    <div className="flex">
      
      <div className="secContainer flex">
      <div className="heading flex">
        <h1>Ultimas inclusões</h1>
      </div>
        {patrimonio &&
          patrimonio.map((patrimonio, index) => (
            <div className="singleItem" key={index}>
              <h5>{patrimonio.host_name}</h5>
              <button
                onClick={() => {
                  setIsVisible(true);
                  setSinglePatrimonio(patrimonio);
                }}
              >
                <AiOutlineEye className="icon" />
              </button>
              <Images patrimonio={patrimonio} />
              <Link
                onClick={() => {
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
