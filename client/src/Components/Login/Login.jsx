import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API/API.user'
// CSS

import '../../App.scss';
// //import video

import logo from './LoginAssets/Perfil GS.png';
// ICONS
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { setUserLocalStorage } from '../AuthProvider/AuthTS/utils';



const Login = () => {
  
  // useState hook to store the inputs
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate('');

  const [loginStatus, setLoginStatus] = useState('');
  const [statusHolder, setStatusHolder] = useState('message');

  const LoginUser = () => {
    if (name === '' || password === '') {
      setLoginStatus('Preencha todos os campos');
      return;
    };
    API().post('/login', {
      name: name,
      password: password,
    }, {
      validateStatus: function (status) {
        return status === 200 || status === 401 || status === 404 || status === 500; // Trate 404 como bem-sucedido
      },
    })
      .then((response) => {
        console.log(response)
        const payload = { token: response.data.token } // , name, id: response.data.id
        // =============== Payload

        switch (response.status) {
          case 200:
            console.log('Logado com sucesso');
            navigate('/dashboard');
            setUserLocalStorage(payload);
            break;
          case 401:
            navigate('/');
            console.log('Credenciais não coincidem');
            setLoginStatus('Credenciais não coincidem');
            window.location.reload();
            break;
          case 404:
            navigate('/');
            console.log('Usuario nao encontrado');
            setLoginStatus('Usuário não encontrado');
            break;
          case 500:
            navigate('/');
            console.log('Erro de servidor');
            setLoginStatus('Erro de servidor');
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
    setName('');
    setPassword('');
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="logo image" className='logo' />
            <h3>Bem vindo de volta!</h3>
          </div>
          <form action="" className='form grid' onSubmit={onSubmit}>
            <span className={statusHolder}>{loginStatus}</span>
            <div className="inputDiv">
              <label htmlFor="name">Nome</label>
              <div className="input flex">
                <FaUserShield className='icon' />
                <input type="text" id='name' placeholder=' Nome' onChange={(event) => {
                  setName(event.target.value)
                }} />

              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Senha</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon' />
                <input type="password" id='password' placeholder=' Senha' onChange={(event) => {
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
               <a href="/">Esqueceu a senha</a>
            </span>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login