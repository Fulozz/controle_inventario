import React, { useEffect, useState } from 'react'
import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar'
import Body from './components/Body'

const Todos = () => {
  return (
    <>
    <div className='container'>
      <Sidebar />
      <Body />
    </div>
  </>
  )
}

export default Todos