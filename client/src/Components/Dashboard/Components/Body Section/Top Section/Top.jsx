import React from 'react'
import './top.css'

// Import de Icons 
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsArrowRightShort } from 'react-icons/bs'
//Imported Images
import img from '../../../Assets/Perfil GS.png'
import computer from '../../../Assets/computer.png'
import img2 from '../../../Assets/gscN.jpg'
const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Admin dashboard</h1>
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className='icon' />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className='icon' />
          <IoIosNotificationsOutline className='icon' />
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
             {/* incluir uma maneira de puxar essa imagem do usuario do banco de dados, 
             e uma maneira de envia-la para lá pelo frontend*/}
          </div>
        </div>
      </div>

      <div className="cardSection flex">

        <div className="rightCard flex">
          <h1>Esse é o inventario de Patrimonio GS/VMP</h1>
          <p>Esses foram os ultimos computadores inclusos em sistema</p>

          <div className="buttons flex">
            <button className="btn">Veja mais</button>
            <button className="btn transparent">Veja todos</button>
          </div>
          <div className="videoDiv">
          <img src={img2} alt="Admin Image" className='topImage' />
          </div>
        </div>


          </div>
        </div>
  )
}

export default Top