import React from "react";
import { FormProvider } from "react-hook-form";
import "./write.css";
import Sidebar from "../Dashboard/Components/Sidebar Section/Sidebar";
import Form from "./components/Form"
// import FormTest from "./register-form/FormTest";

function Write() {
  return (
    <div className="container flex">
      <Sidebar />
      <div className="itemForm">
        <FormProvider>
           <Form /> 
          {/* <FormTest /> */}
        </FormProvider>
      </div>
    </div>
  );
}

export default Write;