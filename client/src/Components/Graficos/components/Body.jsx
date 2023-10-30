import React from 'react'
import Top from '../../Top Section/Top'

import Graficos from './graficos/Graficos';
import Listas from './listas/Listas';


const Body = () => {
  return (
    <div className='mainContent'>
        <Top />
        <div className="bottom flex">
            <Listas /> 
            <Graficos />

        </div>
       </div>
  )
}

export default Body