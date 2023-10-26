import React, { useEffect, useState } from 'react'
import API from '../../../API/API.patrimonio';

const Graficos = () => {
    const [numeroDeProdutos, setNumeroDeProdutos] = useState(null);

    useEffect(() => {
        API().get("/patrimonios").then((response) => {
            const a = JSON.stringify(response.data)
            
            console.log(a);
        });
      }, []);
      

  return (
    <div>Graficos</div>
  )
}

export default Graficos