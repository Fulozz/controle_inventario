import React, {useState, useEffect} from 'react'
import './Login.css'
import '../../App.css'
import { Link , useNavigate} from 'react-router-dom'


import Axios from 'axios';

// //import video
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/image.png'

import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import { setUserLocalStorage } from '../AuthProvider/AuthTS/utils';


const Login = () => {
  // useState hook to store the inputs
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigateTo = useNavigate('')

  const [loginStatus, setLoginStatus] = useState('')
  const [statusHolder, setStatusHolder] = useState('message')



  const LoginUser = async (e)=> {
    if (email === '' || password === '') {
      setLoginStatus('Preencha todos os campos');
      return;
    }
    e.preventDefault();
    
    Axios.post('http://localhost:3000/api/v1/login', {
        email: email,
        password: password,
      },{
        validateStatus: function (status) {
          return status === 200 || status === 404 || status === 401 ; // Trate 404 como bem-sucedido
        },
      })
      .then((response) => {
       
        const payload = {token: response.data.token, email, id: response.data.id}
        // =============== Payload
        console.log(response);

        switch (response.status) {
          case 200: {
            setUserLocalStorage(payload);
            navigateTo('/dashboard');
            }
            break;
          case 404:
            console.log('Usuario nao encontrado');
            setLoginStatus('Usuário não encontrado');
            navigateTo('/');
            break;
          case 401:
            console.log('Credenciais não coincidem');
            setLoginStatus('Credenciais não coincidem');
            navigateTo('/');
            break;
        }
      })
      .catch((err) => {
        console.error(err);
        setLoginStatus('Erro ao fazer login');
      });

    };
  
    useEffect(() => {
      if (loginStatus !== '') {
        setStatusHolder('showMessage');
        setTimeout(() => {
          setStatusHolder('message');
        }, 2000);
      }
    }, [loginStatus],
    );
  
    const onSubmit = (e) => {
      e.preventDefault();
      setEmail('')
      setPassword('')
  
    };

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
            <form action="" className='form grid' onSubmit={onSubmit}>
              <span className={statusHolder}>{loginStatus}</span>
              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flex">
                  <FaUserShield className='icon' />
                  <input type="email" id='email' placeholder=' Enter E-mail' onChange={(event)=>{
                    setEmail(event.target.value)
                  }} />

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
              <button type='submit' className='btn flex' onClick={LoginUser}>
                <span>Login</span>
                <AiOutlineSwapRight className='icon' />
              </button>
              <span className="forgotPassword">
              <a href="/dashboard">Dashboard</a>
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