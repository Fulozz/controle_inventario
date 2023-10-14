import React from "react";
import { FormProvider } from "react-hook-form";
import "./write.css";
import Sidebar from "../Dashboard/Components/Sidebar Section/Sidebar";
import Form from "./forms/Form"
// import FormTest from "./components/FormTest";

function Write() {
  return (
    <div className="container flex">
      <Sidebar />
      <div className="itemForm">
        <FormProvider>
           <Form /> 
        </FormProvider>
      </div>
    </div>
  );
}

export default Write;