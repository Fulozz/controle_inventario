import React, { useEffect, useState } from 'react'
import API from '../../../API/API.patrimonio';
import './Graficos.css'
const Graficos = () => {
    const [data, setData] = useState({
      computador: Number,
      monitor: Number,
      telefone: Number,
      switch: Number,
      servidor: Number,
      notebook: Number,
      impressora: Number,
    });

    useEffect(() => {
        API().get("/patrimonios").then((response) => {
            const data = JSON.parse(JSON.stringify(response.data))
            const items = data
            setData({
              computador: items[0].computador, 
              impressora: items[1].impressora, 
              monitor: items[2].monitor,
              notebook: items[3].notebook,  
              servidor: items[4].servidor, 
              switch: items[5].switch, 
              telefone: items[6].telefone, 
            })
            console.log(data)
        });
      }, []);
      console.log(data)
const dataSum = () =>{
  return data.computer + data.notebook + data.impressora
}
console.log(dataSum)
  return (
    <div className="graphs">
      <div className="graficos">
        <h1>{data.computador}</h1>
      </div>
    </div>
  )
}

export default Graficos