import React from 'react'
import '../../Card.css'
const Local = (patrimonio) => {
    const singlePatrimonio = patrimonio.patrimonio
  return (
    <>
     <h2>
        <strong>Local</strong>
    </h2>
    <h3>
        <strong>Local:</strong> {singlePatrimonio.local}
    </h3>
    <h3>
        <strong>Departamento:</strong>
        {singlePatrimonio.departamento}
    </h3>
    <h3>
        <strong>Estado:</strong> {singlePatrimonio.estado}
    </h3>
                  </>
  )
}

export default Local