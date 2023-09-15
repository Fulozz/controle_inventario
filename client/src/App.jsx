import './App.scss'
import  Dashboard from './Components/Dashboard/Dashboard.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import UserProfile from './Components/UserProfile/UserProfile'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// Import React router dom
import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'


// router


function App() {
  const [token, setToken] = useState('');
  const navigateTo = useNavigate('')

  useEffect(() => {
    // Obtenha o token do localStorage
    const storedItem = localStorage.getItem('u');
    const storedToken = storedItem.token
    setToken(storedToken);
  }, [token]);

  const isValidToken = async (token) => {
    // Faça uma solicitação HTTP para a API de autenticação
    const response = await fetch(`/validate`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if(response.data !==200){
      navigateTo('/')
    }

    console.log(response)
  };



  const router = createBrowserRouter([
    {
      path: '/',
      element: <div><Login /></div>
    },
    {
      path: '/register',
      element: <div><Register /></div>
    },
    {
      path: '/dashboard',
      element: <div><Dashboard /></div>,
    },
    {
      path: '/userprofile',
      beforeEnter: isValidToken,
      element: <div><UserProfile /></div>,
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App