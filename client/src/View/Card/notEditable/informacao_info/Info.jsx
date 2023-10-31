import React from 'react'
import '../../Card.css'

const Info = (patrimonio) => {
    const singlePatrimonio = patrimonio.patrimonio
  return (
    <>
    { singlePatrimonio.categoria === "computador" ? (
                  <>
                    <h2>Informações</h2>
                    <h3>
                      
                      <strong> Patrimonio: </strong>
                      {singlePatrimonio.patrimonio}
                    </h3>
                    <h3>
                      
                      <strong> Categoria: </strong>
                      {singlePatrimonio.categoria}
                    </h3>
                    <h3>
                      
                      <strong> Número de série: </strong>
                      {singlePatrimonio.serial_number}
                    </h3>
                    <h3>
                      
                      <strong> Marca: </strong>
                      {singlePatrimonio.marca}
                    </h3>
                    <h3>
                      
                      <strong> Modelo: </strong>
                      {singlePatrimonio.modelo}
                    </h3>
                  </>
                ) : singlePatrimonio.categoria === "servidor" ? (
                  <>
                    <h2>Informações</h2>
                    <h3>
                      
                      <strong> Patrimonio: </strong>
                      {singlePatrimonio.patrimonio}
                    </h3>
                    <h3>
                      
                      <strong> Categoria: </strong>
                      {singlePatrimonio.categoria}
                    </h3>
                    <h3>
                      
                      <strong> Número de série: </strong>
                      {singlePatrimonio.serial_number}
                    </h3>
                    <h3>
                      
                      <strong> Marca: </strong>
                      {singlePatrimonio.marca}
                    </h3>
                    <h3>
                      
                      <strong> Modelo: </strong>
                      {singlePatrimonio.modelo}
                    </h3>
                  </>
                ) : singlePatrimonio.categoria === "switch" ? (
                  <>
                    <h2>Informações</h2>
                    <h3>
                      
                      <strong> Patrimonio: </strong>
                      {singlePatrimonio.patrimonio}
                    </h3>
                    <h3>
                      
                      <strong> Categoria: </strong>
                      {singlePatrimonio.categoria}
                    </h3>
                    <h3>
                      
                      <strong> Número de série: </strong>
                      {singlePatrimonio.serial_number}
                    </h3>
                    <h3>
                      
                      <strong> Marca: </strong>
                      {singlePatrimonio.marca}
                    </h3>
                    <h3>
                      
                      <strong> Modelo: </strong>
                      {singlePatrimonio.modelo}
                    </h3>
                  </>
                ) : 
                  singlePatrimonio.categoria === "notebook" ? (
                  <>
                    <h2>Informações</h2>
                    <h3>
                      
                      <strong> Patrimonio: </strong>
                      {singlePatrimonio.patrimonio}
                    </h3>
                    <h3>
                      
                      <strong> Categoria: </strong>
                      {singlePatrimonio.categoria}
                    </h3>
                    <h3>
                      
                      <strong> Número de série: </strong>
                      {singlePatrimonio.serial_number}
                    </h3>
                    <h3>
                      
                      <strong> Marca: </strong>
                      {singlePatrimonio.marca}
                    </h3>
                    <h3>
                      
                      <strong> Modelo: </strong>
                      {singlePatrimonio.modelo}
                    </h3>
                    <h3>
                      
                      <strong> Tamanho: </strong>
                      {singlePatrimonio.tamanho}
                    </h3>
                  </>
                ) : 
                  singlePatrimonio.categoria === "impressora" ? (
                  <>
                    <h2>Informações</h2>
                    <h3>
                      
                      <strong> Patrimonio: </strong>
                      {singlePatrimonio.patrimonio}
                    </h3>
                    <h3>
                      
                      <strong> Categoria: </strong>
                      {singlePatrimonio.categoria}
                    </h3>
                    <h3>
                      
                      <strong> Número de série: </strong>
                      {singlePatrimonio.serial_number}
                    </h3>
                    <h3>
                      
                      <strong> Marca: </strong>
                      {singlePatrimonio.marca}
                    </h3>
                    <h3>
                      
                      <strong> Modelo: </strong>
                      {singlePatrimonio.modelo}
                    </h3>
                    <h3>
                      
                      <strong> Tipo: </strong>
                      {singlePatrimonio.tipo_impressora}
                    </h3>
                  </>
                ) : 
                  singlePatrimonio.categoria === "monitor" ? (
                  <>
                    <h2>Informações</h2>
                    <h3>
                      
                      <strong> Patrimonio: </strong>
                      {singlePatrimonio.patrimonio}
                    </h3>
                    <h3>
                      
                      <strong> Categoria: </strong>
                      {singlePatrimonio.categoria}
                    </h3>
                    <h3>
                      
                      <strong> Número de série: </strong>
                      {singlePatrimonio.serial_number}
                    </h3>
                    <h3>
                      
                      <strong> Marca: </strong>
                      {singlePatrimonio.marca}
                    </h3>
                    <h3>
                      
                      <strong> Modelo: </strong>
                      {singlePatrimonio.modelo}
                    </h3>
                  </>
                ) : 
                  singlePatrimonio.categoria === "telefone" ? (
                  <>
                    <h2>Informações</h2>
                    <h3>
                      
                      <strong> Patrimonio: </strong>
                      {singlePatrimonio.patrimonio}
                    </h3>
                    <h3>
                      
                      <strong> Categoria: </strong>
                      {singlePatrimonio.categoria}
                    </h3>
                    <h3>
                      
                      <strong> Número de série: </strong>
                      {singlePatrimonio.serial_number}
                    </h3>
                    <h3>
                      
                      <strong> Marca: </strong>
                      {singlePatrimonio.marca}
                    </h3>
                    <h3>
                      
                      <strong> Modelo: </strong>
                      {singlePatrimonio.modelo}
                    </h3>
                    <h3>
                      
                      <strong> Número da PA: </strong>
                      {singlePatrimonio.num_pa}
                    </h3>
                   
                  </>
                ) : null}
    
    </>
  )
}

export default Info