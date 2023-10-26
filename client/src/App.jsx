import { useEffect, useState } from "react";
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

// router

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const statusValidate = async () => {
    const URL = "http://10.0.50.39:3001/api/v1/user";
    const URLocal = "http://localhost:3001/api/v1/user";
    const requestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("jwt"),
      }),
    };
    await fetch(`${URL}/validate`, requestInit).then((response) => {
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
