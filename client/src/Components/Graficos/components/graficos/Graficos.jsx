import React, { useEffect, useState } from 'react'
import API from '../../../API/API';

const Graficos = () => {
    const [quantidade, setQuantidade] = useState()

    useEffect(() => {
        API().get("/patrimonios").then((response) => {
            setQuantidade(response.data);
        });
      }, []);

  return (
    <div>Graficos</div>
  )
}

export default Graficos