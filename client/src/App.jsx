import './App.scss'
import isAuthenticated from './Components/Auth/PriviteRoute'
import  Dashboard from './Components/Dashboard/Dashboard.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import UserProfile from './Components/UserProfile/UserProfile'

// import validateJWTToken from './services/validate'

import{
  createBrowserRouter,
  RouterProvider,

} from 'react-router-dom'


// router


function App() {
  const [user, setUser] = useState(null)
  isAuthenticated(token)


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
      element:  <><Dashboard user={user} />   </>,
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