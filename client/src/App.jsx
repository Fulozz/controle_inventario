import React, { useEffect, useState } from "react";
import "./App.css";

import Dashboard from "./Components/Dashboard/page.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Write from "./Components/Write/Write";

import Todos from "./Components/Geral/Todos";
import Loading from "./Components/Loading/Loading";
import Graphs from "./Components/Graficos/Graphs";
import APIUser from '../src/API/API.user'

// router

const  App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const statusValidate = async () => {
    await APIUser().post(`/validate`,{
      token: localStorage.getItem("jwt")
    }).then((response) => {
      if (response.status === 200) return setIsAuthenticated(true);
      if (response.status != 200) return setIsAuthenticated(false);
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
