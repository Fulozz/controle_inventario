import { React, useState} from 'react'
import './Register.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
// //import video
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/image.png'

import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import { MdAttachEmail } from 'react-icons/md'



const Register = () => {
//useState to hold our inputs

const [email, sentEmail] = useState('')
const [username, sentUserName] = useState('')
const [password, sentPassword] = useState('')
const navigateTo = useNavigate()

// onclick let us get what user has entered

const createUser = (e)=>{
  e.preventDefault()
  if (!email || !username || !password) {
    console.log('Por favor, preencha todos os campos.');
    return;
  }
  //Require axios to create an API to connect with the server
  Axios.post('http://localhost:3006/register', {
    
    //variable for the server through the route
    email: email,
    username: username,
    password: password
  }).then(()=>{
    console.log('user has been created ')
    navigateTo('/')
    sentPassword('')
    sentUserName('')
    sentEmail('')
  }).catch((err)=>{
    console.log(err)
  })
  
}


  return (
    <div className="registerPage flex">
    <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create and sell Extraordinary Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={'/'}>
            <button className='btn'>Login!</button>
              </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="logo image" className='logo' />
            <h3>Let Us know You!</h3>
            </div>
            <form action="" className='form grid'>
              <div className="inputDiv">
                  <label htmlFor="email">Email</label>
                  <div className="input flex">
                    <MdAttachEmail className='icon' />
                    <input type="email" id='email' placeholder=' Enter e-mail' onChange={(event)=>{
                    sentEmail(event.target.value)
                  }}/>

                  </div>
                </div>
              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className='icon' />
                  <input type="text" id='name' placeholder=' Enter Username' onChange={(event)=>{
                    sentUserName(event.target.value)
                  }}/>

                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className='icon' />
                  <input type="password" id='password' placeholder=' Enter Password' onChange={(event)=>{
                    setPassword(event.target.value)
                  }} />
                </div>
              </div>
              <button type='submit' className='btn flex' onClick={createUser}>
                <span>Register</span>
                <AiOutlineSwapRight className='icon' />
              </button>
              <span className="forgotPassword">
                Forgot your password <a href="">click Here</a>
              </span>
            </form>
            
        </div>
    </div>
    </div>
  )
}

export default Register