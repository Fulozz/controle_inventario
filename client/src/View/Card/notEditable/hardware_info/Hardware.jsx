import React from 'react'
import '../../Card.css'


const Hardware = (patrimonio) => {
    const singlePatrimonio = patrimonio.patrimonio


  return (
    <>
    {
                singlePatrimonio.categoria === "computador" ? (
                  <>
                    <h2>
                      <strong>Hardware</strong>
                    </h2>
                    <h3>
                      <strong>CPU:</strong> {singlePatrimonio.cpu}
                    </h3>
                    <h3>
                      <strong>GPU:</strong> {singlePatrimonio.gpu}
                    </h3>
                    <h3>
                      <strong>Memoria:</strong> {singlePatrimonio.memoriaRam}
                      {singlePatrimonio.memoriaRamDDR}
                    </h3>
                    <h3>
                      <strong>Hard Disk:</strong> {singlePatrimonio.hard_disk}
                    </h3>
                  </>
                ) : 
                  singlePatrimonio.categoria === "notebook" ? (
                  <>
                    <h2>
                      <strong>Hardware</strong>
                    </h2>
                    <h3>
                      <strong>Tamanho:</strong> {singlePatrimonio.tamanho}
                    </h3>
                    <h3>
                      <strong>CPU:</strong> {singlePatrimonio.cpu}
                    </h3>
                    <h3>
                      <strong>GPU:</strong> {singlePatrimonio.gpu}
                    </h3>
                    <h3>
                      <strong>Memoria:</strong> {singlePatrimonio.memoriaRam}
                      {singlePatrimonio.memoriaRamDDR}
                    </h3>
                    <h3>
                      <strong>Hard Disk:</strong> {singlePatrimonio.hard_disk}
                    </h3>
                  </>
                ) : 
                  singlePatrimonio.categoria === "monitor" ? (
                  <>
                    <h2>
                      <strong>Hardware</strong>
                    </h2>
                    <h3>
                      <strong>Tamanho:</strong> {singlePatrimonio.tamanho}
                    </h3>
                    <h3>
                      <strong>Tipo:</strong> {singlePatrimonio.tipo_monitor}
                    </h3>
                    <h3>
                      <strong>Formato:</strong> {singlePatrimonio.formato}
                    </h3>
                  </>
                ) : 
                  singlePatrimonio.categoria === "switch" ? (
                  <>
                    <h2>
                      <strong>Hardware</strong>
                    </h2>
                    <h3>
                      <strong>Portas: </strong> {singlePatrimonio.portas}
                    </h3>
                    <h3>
                      <strong>POE: </strong> {singlePatrimonio.poe}
                    </h3>
                    <h3>
                      <strong>Geranciavel: </strong>
                      {singlePatrimonio.gerenciavel}
                    </h3>
                  </>
                ) : 
                  singlePatrimonio.categoria === "servidor" ? (
                  <>
                    <h2>
                      <strong>Hardware</strong>
                    </h2>
                    <h3>
                      <strong>CPU:</strong> {singlePatrimonio.cpu}
                    </h3>
                    <h3>
                      <strong>GPU:</strong> {singlePatrimonio.gpu}
                    </h3>
                    <h3>
                      <strong>Memoria:</strong> {singlePatrimonio.memoriaRam}
                      {singlePatrimonio.memoriaRamDDR}
                    </h3>
                    <h3>
                      <strong>Hard Disk I:</strong>
                      {singlePatrimonio.hard_disk}
                    </h3>
                    <h3>
                      <strong>Hard Disk II:</strong>
                      {singlePatrimonio.hard_disk}
                    </h3>
                    <h3>
                      <strong>Energia:</strong> {singlePatrimonio.power_suply}
                    </h3>
                    <h3>
                      <strong>Sistema Operacional:</strong>
                      {singlePatrimonio.sistema_operacional}
                    </h3>
                    <h3>
                      <strong>Acesso remoto:</strong>
                      {singlePatrimonio.acesso_remoto}
                    </h3>
                  </>
                ) : null}
    </>
  )
}

export default Hardware