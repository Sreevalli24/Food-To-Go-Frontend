import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(1, "Username must be at least 1 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string()
      .required("email is required")
      .min(1, "email must be at least 1 characters")
      .max(20, "email must not exceed 20 characters"),
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
    console.log("data");
    const payload = {
      userName: data.username,
      email: data.email,
      userPassword: data.password,
    };

    const result = await axios.post(
      "http://localhost:8000/registerNewUser",
      payload
    );

    console.log(result);
    navigate("/");
  };

  return (
    <div className="register-form">      
      <div className="text-center">        
         <h1>Register Page</h1>      
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
            <label>Email</label>          
            <input
               name="email"
               type="text"
               {...register("email")}
               className={`form-control ${errors.email ? "is-invalid" : ""}`}
             />          
             <div className="invalid-feedback">{errors.email?.message}</div>        
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
             <button type="submit" className="btn btn-primary">Register</button>          
             <Link className="btn btn-primary my-2" to={"/"}> Back to Home</Link>       
          </div>      
     </form>    
    </div>  
  );
}





