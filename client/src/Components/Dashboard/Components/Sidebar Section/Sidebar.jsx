import React from 'react'

import logo from '../../Assets//logo.png'
import './sidebar.css'
import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md'

import { AiOutlinePieChart, AiOutlinePoweroff } from 'react-icons/ai'
import { BsQuestionCircle } from 'react-icons/bs'
import { logout } from '../../../AuthProvider/AuthTS/utils'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {

  const navigate = useNavigate();


  const LogoutUser = async () => {
    logout();
    navigate('/');
  };
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt="Image" className='logo' />
        <h2>LOGO</h2>
      </div>
      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="" className='menuLink flex'>
              <IoMdSpeedometer className='icon' />
              <span className="smallText">
                Dashboard
              </span>
            </a>
          </li>


          <li className="listItem">
            <a href="" className='menuLink flex'>
              <MdDeliveryDining className='icon' />
              <span className="smallText">
                My Inputs
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="" className='menuLink flex'>
              <MdOutlineExplore className='icon' />
              <span className="smallText">
                Explorer
              </span>
            </a>
          </li>




        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="" className='menuLink flex'>
              <AiOutlinePieChart className='icon' />
              <span className="smallText">
                Charts
              </span>
            </a>
          </li>


          <li className="listItem">
            <a href="" className='menuLink flex'>
              <MdOutlinePermContactCalendar className='icon' />
              <span className="smallText">
                My Inputs
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="" className='menuLink flex' onClick={LogoutUser}>
              <AiOutlinePoweroff className='icon' />
              <span className="smallText">
                LogOut
              </span>
            </a>
          </li>




        </ul>
      </div>

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
    </div>
  )
}

export default Sidebar