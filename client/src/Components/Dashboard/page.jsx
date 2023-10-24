"use client"

import React, { useState } from 'react'
import Sidebar from './Components/Sidebar Section/Sidebar'
import Body from './Components/Body Section/Body'
import './dashboard.css'

import Loading from '../Loading/Loading'

export const AdminDashboard = () => {
  const [visible, setVisible] = useState(true);

  const hideLoading = () => {
    setVisible(false);
    document.querySelector(".loading").remove();
  };

  const interval = setInterval(() => {
    if (visible) {
      hideLoading();
    }
  }, 2000);

  return (
    <>
    
        <div className='container'>
          <Loading visible={visible}>
            <Sidebar />
            <Body />
          </Loading>
        </div>
      
    </>
  )
}
export default AdminDashboard




/// TODO