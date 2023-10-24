import React, { useEffect, useState } from 'react'
import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar'
import Body from './components/Body'
import Loading from '../Loading/Loading'

const Todos = () => {
  return (
    <>
    <div className='container'>
      <Loading />
      <Sidebar />
      <Body />
    </div>
  </>
  )
}

export default Todos