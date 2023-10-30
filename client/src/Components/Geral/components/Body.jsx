import React from 'react';
import './body.css';
import Top from '../../Top Section/Top'
import Geral from './Geral/Geral';

const Body = () => {
  return (
    <div className='mainContent'>
     
        <Top />
      
        <div className="bottom flex">
           <Geral /> 
        </div>
       </div>
  )
}

export default Body