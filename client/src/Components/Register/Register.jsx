import { React, useState } from 'react';
import '../../App.css';
import {  useNavigate } from 'react-router-dom';
import API from '../API/API'
// //import video

import logo from '../Login/LoginAssets/Perfil GS.png';

import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdAttachEmail } from 'react-icons/md';
import Loading from '../Loading/Loading';



const Register = () => {
  //useState to hold our inputs

  const [email, sentEmail] = useState('');
  const [username, sentUsername] = useState('');
  const [password, sentPassword] = useState('');
  const navigateTo = useNavigate('');

  // onclick let us get what user has entered

  const createUser = (e) => {
    e.preventDefault();
    if (!email || !username || !password) {
      console.log('Por favor, preencha todos os campos.');
      return;
    };
    //Require API to create an API to connect with the server
    API().post('/register', {
      email: email,
      name: username,
      password: password
    }, {
      validateStatus: function (status) {
        return status === 400 || status === 401 || status === 200 || status === 409; // Trate <400 como bem-sucedido
      },
    }).then(() => {
      console.log('user has been created ')
      navigateTo('/')
      sentPassword('')
      sentUsername('')
      sentEmail('')
    }).catch((err) => {
      console.log(err)
    })

  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="formDiv flex">
          <div className="headerDiv">
            <a href="/dashboard"><img src={logo} alt="logo image" className='logo' /></a>
            <h3>Let Us know You!</h3>
          </div>
          <form action="" className='form grid'>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdAttachEmail className='icon' />
                <input type="email" id='email' placeholder=' Enter e-mail' onChange={(event) => {
                  sentEmail(event.target.value)
                }} />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon' />
                <input type="text" id='name' placeholder=' Enter Username' onChange={(event) => {
                  sentUsername(event.target.value)
                }} />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon' />
                <input type="password" id='password' placeholder=' Enter Password' onChange={(event) => {
                  sentPassword(event.target.value)
                }} />
              </div>
            </div>
            <button type='submit' className='btn flex' onClick={createUser}>
              <span>Register</span>
              <AiOutlineSwapRight className='icon' />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Register