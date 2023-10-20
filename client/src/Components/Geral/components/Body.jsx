import React from 'react';
import './body.css';
import Top from '../../Top Section/Top'
import Geral from './Geral/Geral';

function Body() {
  return (
    <div className='mainContent'>
      <div className="top">
        <Top />
      </div>
        <div className="bottom flex">
           <Geral /> 
        </div>
       </div>
  )
}

export default Body