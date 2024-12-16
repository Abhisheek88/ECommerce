import {Link} from "react-router-dom"
import React, { useState } from 'react'
import CommonForm from "../../components/common/form";
import { registerFormControls } from "@/config";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function onSubmit(){

}

function register() {
const [formData, setFormData] = useState(initialState)

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Create new account
      </h1>
      <p className="mt-2">
        Already have an account
        <Link
          className=" ml-2 text-primary hover:underline text-blue-900 font-bold"
          to="/auth/login"
        >
          Login
        </Link>
       
      </p>
    </div>

    <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

    </div>
  )
}

export default register