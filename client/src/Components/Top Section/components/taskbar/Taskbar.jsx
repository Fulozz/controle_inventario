import React, { useEffect, useState } from 'react'
import './taskbar.css'
import API from '../../../API/API'
const Taskbar = () => {
  const [patrimonios, setPatrimonios] = useState([]);

  useEffect(() => {
    API().get("/all").then((response) => {
      setPatrimonios(response.data);
    });
  }, []);
  const listaDePatrimonios = patrimonios.filter((patrimonio) => {
    return patrimonio.estado === "manutenção" && "Manutenção";
  });
 
  return (
    
    <div className="taskbar">
        <div className="task-content">
          <div className="task-item">          
            <h4>Lista de Manutenções</h4>
            <ul>
              {listaDePatrimonios.map((patrimonio) => (
                <li key={patrimonio.id}>
                  {patrimonio.categoria} - Nº {patrimonio.patrimonio}
                </li>
              ))}
              </ul>            
          </div>    
      </div>
    </div>
  )
}

export default Taskbar