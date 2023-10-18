import React from 'react';
import './body.css';
import Top from '../../Dashboard/Components/Body Section/Top Section/Top'
import Geral from './Geral/Geral';
import GeralTest from './Geral/GeralTest';

function Body() {
  return (
    <div className='mainContent'>
        <Top />

        <div className="bottom flex">
          {/* <Geral /> */}
          <GeralTest />
        </div>
       </div>
  )
}

export default Body