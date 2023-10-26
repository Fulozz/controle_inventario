import React, { useEffect, useState } from 'react'
import Top from '../../Top Section/Top'
import ApexCharts from 'apexcharts'
import API from '../../API/API.patrimonio';
import Graficos from './graficos/Graficos';
const Body = () => {
    const [patrimonios, setPatrimonio] = useState([]);

    useEffect(() => {
        API().get("/all").then((response) => {
          setPatrimonio(response.data);
        });
      }, []);;

 
  return (
    
    <div className='mainContent'>
      <div className="top">
        <Top />
      </div>
        <div className="bottom flex">
            <Graficos />
        </div>
       </div>
  )
}

export default Body