import React, { useEffect, useState } from 'react'
import Top from '../../Top Section/Top'
import ApexCharts from 'apexcharts'
import API from '../../API/API.patrimonio';
import Graficos from './graficos/Graficos';
import Listas from './listas/Listas';
const Body = () => {
    const [patrimonios, setPatrimonio] = useState([]);

    useEffect(() => {
        API().get("/all").then((response) => {
          setPatrimonio(response.data);
        });
      }, []);;

 
  return (
    
    <div className='mainContent'>
      
        <Top />
   
        <div className="bottom flex">
           
            <Listas /> 
            <Graficos />
        </div>
       </div>
  )
}

export default Body