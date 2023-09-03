import React, {useState} from 'react'
import './Login.css'
import '../../App.css'
import { Link } from 'react-router-dom'

// //import video
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/image.png'

import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
const Login = () => {

  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  
  Axios.post('http://localhost:3002/login', {
    
  //variable for the server through the route
  email: email,
  password: password
}).then(()=>{
  console.log('logged in successfully ')
}).catch((err)=>{
  console.log(err)
})


  return (
    <div className="loginPage flex">
    <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create and sell Extraordinary Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Dont han an account?</span>
            <Link to={'./register'}>
            <button className='btn'>Sign Up!</button>
              </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="logo image" className='logo' />
            <h3>Welcome Back!</h3>
            </div>
            <form action="" className='form grid'>
              <span className='showMessage'>Login status will go here</span>
              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className='icon' />
                  <input type="text" id='username' placeholder=' Enter Username' />

                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className='icon' />
                  <input type="password" id='password' placeholder=' Enter Password' />
                </div>
              </div>
              <button type='submit' className='btn flex'>
                <span>Login</span>
                <AiOutlineSwapRight className='icon' />
              </button>
              <span className="forgotPassword">
                Passe livre?<a href="/dashboard">Dashboard</a>
              </span>
              <span className="forgotPassword">
                Forgot your password <a href="">click Here</a>
              </span>
            </form>
            
        </div>
    </div>
    </div>
  )
}

export default Login