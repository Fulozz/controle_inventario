import React from 'react'

import computer from "../../Components/Assets/categorias/computer.png";
import notebook from "../../Components/Assets/categorias/notebook png.png";
import impressora from "../../Components/Assets/categorias/impressora png.png";
import monitor from "../../Components/Assets/categorias/monitor png.png";
import telefone from "../../Components/Assets/categorias/telefone png.png";
import switchI from "../../Components/Assets/categorias/switch png.png";
import server from "../../Components/Assets/categorias/server png.png";


const Images = ( patrimonio ) => {
  const singlePatrimonio = patrimonio.patrimonio
  return (
    <> 
              {
                singlePatrimonio.categoria === "computador" ? (
                  <img src={computer} alt="Image Name" />
                ) :singlePatrimonio.categoria === "notebook" ? (
                  <> 
                  <img src={notebook} alt="Image Name" />
                  </>
                ) : singlePatrimonio.categoria === "impressora" ? (
                  <> 
                  <img src={impressora} alt="Image Name" />
                  </>
                ) : singlePatrimonio.categoria === "monitor" ? (
                  <> 
                  <img src={monitor} alt="Image Name" />
                  </>
                ) : singlePatrimonio.categoria === "telefone" ? (
                  <> 
                  <img src={telefone} alt="Image Name" />
                  </>
                ) : singlePatrimonio.categoria === "switch" ? (
                  <> 
                  <img src={switchI} alt="Image Name" />
                  </>
                ) : singlePatrimonio.categoria === "server" ? (
                  <> 
                  <img src={server} alt="Image Name" />
                  </>
                ) : null
              }
            </>
  )
}

export default Images