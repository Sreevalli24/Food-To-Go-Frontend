import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(1, "Username must be at least 1 characters")
      .max(20, "Username must not exceed 20 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(1, "Password must be at least 1 characters")
      .max(40, "Password must not exceed 40 characters"),
  });
  
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    const payload = { userName: data.username, userPassword: data.password };
    const result = await axios.post(
      "http://localhost:8000/authenticate",
      payload
    );

    console.log(result);

    if (result?.data?.user?.role[0]?.roleName === "User") {
      navigate("/Consumerview");
    } else {
      navigate("/Restaurantview");
    }

  };
  return (
    <div className="register-form">     
      <div className="text-center">        
         <h1>Login Page</h1>     
      </div>   

      <form onSubmit={handleSubmit(onSubmit)}>       
        <div className="form-group">          
          <label>Username</label>          
          <input
            name="username"
            type="text"
            {...register("username")}
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
           />         
          <div className="invalid-feedback">{errors.username?.message}</div>       
        </div>       

        <div className="form-group">          
          <label>Password</label>          
          <input
            name="password"
            type="password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />          
          <div className="invalid-feedback">{errors.password?.message}</div>       
        </div>   

        <div className="form-group">          
          <button type="submit" className="btn btn-primary mt-2">Login</button>         
          <Link className="btn btn-primary mx-2 mt-2" to={"/"}>Back to Home</Link>       
        </div>      
      </form>   
    </div> 
  );
}