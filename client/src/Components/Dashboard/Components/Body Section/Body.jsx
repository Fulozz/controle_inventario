import React from 'react';
import './body.css';

import Listing from './Listing Section/Listing';
import Activity from './Activity Section/Activity';
import Top from '../../../Top Section/Top';

import img2 from '../../../Assets/gscN.jpg';
const Body = () => {
  return (
    <div className='mainContent'>
        <Top />
        <div className="cardSection flex">
            <div className="rightCard flex">
                <h1>Esse é o inventario de Patrimonio GS/VMP</h1>
                <p>Esses foram os ultimos computadores inclusos em sistema</p>
                <div className="videoDiv">
                <img src={img2} alt="Admin Image" className='topImage' />
              </div>
            </div>
          </div>

        <div className="bottom flex">
          <Listing />
          <Activity />
        </div>
       </div>
  )
}

export default Body