import React from 'react'
import { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate} from 'react-router-dom';
import { users } from "../helpers/url";
import Swal from 'sweetalert2'

export const LoginPage = () => {
  let navigate = useNavigate();

  const verifyToken=async()=>{
    const token=localStorage?.getItem("chepevic@store");
    const resp=await fetch(`${users}/verify/${token}`);
    const data =await resp.json();
    if(data.message=="token valid"){
      return navigate("/dashboard");
    }
}

useEffect(()=>{
    verifyToken();
},[])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit=async (dataForm)=>{
    if(dataForm){
      const resp=await fetch(`${users}/login`,{
        method:"POST",
        body:JSON.stringify(dataForm),
        headers:{
          "content-type": "application/json",
        }
      })
      const data=await resp.json();
 

      if(data.message=="user logged in"){
        localStorage.setItem("chepevic@store", data.token)
        return navigate("/dashboard");
      }
      else{
        Swal.fire({
          title: 'Error!',
          text: data.message,
          icon: 'error',
          confirmButtonText: 'Close',
          confirmButtonColor:'#3A4F7A',
          iconColor:"#144272"
        })
      }
    }
  }
  return (
    <>
    <section className="register"  style={{backgroundImage:"url(images/image1.jpg)", backgroundSize:"cover", backgroundPosition:"center center"}}>
        <div className="register__box">
          <h2 className="register__title">Login</h2>
          <form action="" className="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <input
              type="text"
              className="form__input"
              placeholder="Your Email..."
              autoComplete="off"
          {...register("email", {
            required: true,
            maxLength: 50,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/,
          })}
        />
        {errors.email?.type === "required" && (
          <span className="msgError">Email is required</span>
        )}
        {errors.email?.type === "maxLength" && (
          <span className="msgError">
            Email max length should be 50 characters
          </span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="msgError">Format invalid</span>
        )}
            <input
              type="password"
              className="form__input"
              placeholder="Password..."
              autoComplete="off"
              {...register("password", {
                required: true,
              })}
            />
              {errors.password?.type === "required" && (
          <span className="msgError">Password is required</span>
        )}

            <button className="form__button"><i className="fa-solid fa-arrow-right"></i> Login</button>
            <div className="form__footer">
            <p style={{textAlign:"center", paddingTop:20}}>Create Account click <Link to="/register" className="login">here</Link></p>
            <p style={{textAlign:"center", paddingTop:20}}>Forgot Password? click <Link to="/recoverpassword" className="login">here</Link></p>
            </div>
          </form>
        
        </div>
      </section>
    </>
  )
}
