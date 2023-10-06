import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./write.css";
import Sidebar from "../Dashboard/Components/Sidebar Section/Sidebar";
import Form from "./components/Form";
function Write() {

  return (
    <div className="container flex">
      <Sidebar />
      <div className="itemForm">
        <div className="editor">
            <Form />
        </div>
      </div>
    </div>
  );
}

export default Write;
