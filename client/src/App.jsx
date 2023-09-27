import './App.scss'
import  Dashboard from './Components/Dashboard/Dashboard.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import UserProfile from './Components/UserProfile/UserProfile'


// Import React router dom
import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'


// router


function App() {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Login /> </>
    },
    {
      path: '/register',
      element: <> <Register /> </>
    },
    {
      path: '/dashboard',
      element: <> <Dashboard /> </>,
    },
    {
      path: '/userprofile',
      element: <> <UserProfile /> </>,
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App