import React from "react";
import { FormProvider } from "react-hook-form";
import "./write.css";
import Sidebar from "../Dashboard/Components/Sidebar Section/Sidebar";
import Form from "./forms/Form"
import Loading from "../Loading/Loading";
// import FormTest from "./forms/FormTest";

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