import {Link, useNavigate} from "react-router-dom"
import React, { useState } from 'react'
import CommonForm from "../../components/common/form";
import { registerFormControls } from "@/config";
import {useDispatch} from 'react-redux';
import { registerUser } from "../../store/auth-slice";

const initialState = {
  userName: "",
  email: "",
  password: "",
};


function register() {
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch();
  const navigate =useNavigate();


  function onSubmit(){
    event.preventDefault();
    dispatch(registerUser(formData)).then((data)=>{

      console.log(data);
      
    } )

  }

  console.log(formData);
  

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

export default register;