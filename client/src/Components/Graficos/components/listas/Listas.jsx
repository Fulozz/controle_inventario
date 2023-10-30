import React, { useEffect, useState } from 'react'
import API from '../../../API/API.patrimonio';
import './Listas.css'
import Download from '../download/Download';
const Listas = () => {
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
            const items = data.filter((item) => item);
            setData({
              computador: items[0].computador, 
              impressora: items[1].impressora, 
              monitor: items[2].monitor,
              notebook: items[3].notebook,  
              servidor: items[4].servidor, 
              switch: items[5].switch, 
              telefone: items[6].telefone, 
            })
        });
      }, []);
      

  return (
    <div className="Listas">
      <div className="ul">
        <ul>
          <li><strong>Computadores:</strong> {data.computador}</li>
          <li><strong>Notebooks:</strong> {data.notebook}</li>
          <li><strong>Telefones: </strong>{data.telefone}</li>
          <li><strong>Impressoras:</strong> {data.impressora}</li>
          <li><strong>Switches:</strong> {data.switch}</li>
          <li><strong>Servidores:</strong> {data.servidor}</li>
          <li><strong>Monitores:</strong> {data.monitor}</li>
        </ul>
        <Download />
      </div>
      
    </div>
  )
}

export default Listas