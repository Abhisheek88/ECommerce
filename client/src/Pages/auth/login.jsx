

import {Link} from "react-router-dom"
import React, { useState } from 'react'
import CommonForm from "../../components/common/form";
import { loginFormControls } from "../../config";

const initialState = {
  email: "",
  password: "",
};

function onSubmit(){

}

function login() {
const [formData, setFormData] = useState(initialState)

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Sign in to your account
      </h1>
      <p className="mt-2">
        Don't have an account
        <Link
          className=" ml-2 text-primary hover:underline text-blue-900 font-bold"
          to="/auth/register"
        >
          Register
        </Link>
       
      </p>
    </div>

    <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

    </div>
  )
}

export default login;