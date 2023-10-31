import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate}  from "react-router-dom";

import "./App.css";

// Components
import Dashboard from "./Components/Dashboard/page.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import Write from "./Components/Write/Write";
import Todos from "./Components/Geral/Todos";
import Loading from "./Components/Loading/Loading";
import Graphs from "./Components/Graficos/Graphs";


import APIUser from './API/API.user'
import HelpCenter from "./Components/HelpCenter/HelpCenter";

// router

const  App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  const statusValidate = async () => {
   
     APIUser().post(`/validate`,{
      token: localStorage.getItem("jwt")
    },{
      validateStatus: function (status) {
        return status === 200 ||  status === 400 || status === 401 || status === 404 || status === 500; 
        // Trate 401, 404, 500 como bem-sucedido
      },
    },{
      hideResponse: true,
    }).then((response) => {
      if(response.status !== 200){
        setIsAuthenticated(false)
        localStorage.clear()
      }
      if(response.status === 200){
        setIsAuthenticated(true)
      }
      
    }).catch((err)=>{
      return null
    });
  };
 

  useEffect(() => {
    statusValidate();
  }, []);
  return (
    <div>
      <Loading />
      <Router>
        <Routes>
          <Route element={<Login />} path="/" exact />
          <Route
            element={isAuthenticated ? <Register /> : <Navigate to="/" />}
            path="/register"
            exact
          />
          <Route
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
            path="/dashboard"
            exact
          />
          <Route
            element={isAuthenticated ? <Write /> : <Navigate to="/" />}
            path="/write"
            exact
          />
          <Route
            element={isAuthenticated ? <Todos /> : <Navigate to="/" />}
            path="/todos"
            exact
          />
          <Route
            element={isAuthenticated ? <Graphs /> : <Navigate to="/" />}
            path="/graficos"
            exact
          />
          <Route
            element={isAuthenticated ? <HelpCenter /> : <Navigate to="/" />}
            path="/help"
            exact
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
