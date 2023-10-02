import React from 'react'
import './top.css'

// Import de Icons 
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsArrowRightShort } from 'react-icons/bs'
//Imported Images
import img from '../../../Assets/1693004941361.jpeg'
import computer from '../../../Assets/computer.png'
import video from '../../../Assets/video.mp4'
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
          </div>
        </div>
      </div>

      <div className="cardSection flex">

        <div className="rightCard flex">
          <h1>Thats the recent computers</h1>
          <p>Esses foram os ultimos computadores inclusos em sistema</p>

          <div className="buttons flex">
            <button className="btn">Veja mais</button>
            <button className="btn transparent">Veja todos</button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My status</h1>

              <div className="flex">
                <span>
                  Inclusões feitas por você hoje <br /> <small> Includes </small>
                </span>
                <span>
                  Inclusões feitas recentes geral <br /> <small> Incluodes</small>
                </span>

                <span className="flex link">
                  Go to Includes <BsArrowRightShort className='icon' />
                </span>
              </div>
            </div>

            <div className="imgDiv">
              <img src={computer} alt="img name" />
            </div>

            {/* Use this card to the base
                  <div className="sideBarCard">
                  <BsQuestionCircle className='icon' />
                  <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <h3>Help Center</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis esse, dolor,
                    </p>
                    <button className="btn">Go to Help Center</button>
                  </div>
                </div>
              
             */}

          </div>
        </div>
      </div>

    </div>
  )
}

export default Top