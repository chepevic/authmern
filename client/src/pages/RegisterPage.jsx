import React from "react";
import { useForm } from "react-hook-form";
import { users } from "../helpers/url";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(dataForm) => {
   if (dataForm){
    const resp=await fetch(users,{
      method:"POST",
      body:JSON.stringify(dataForm),
      headers:{
        "content-type": "application/json",
      }
    })
    const data=await resp.json();

  

    if(data.message==="User Created"){
      Swal.fire({
        title: 'Welcome to YSport!',
        text: data.message,
        icon: 'success',
        confirmButtonText: 'Close',
        confirmButtonColor:'#3A4F7A',
        iconColor:"#144272"
      })
      localStorage.setItem("chepevic@store", data.data.token)
      reset();
      setTimeout(() => {
        window.location.href="http://localhost:5173/dashboard";
        
      }, 2000);
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
  };
  return (
    <>
      <section className="register"  style={{backgroundImage:"url(images/image1.jpg)", backgroundSize:"cover", backgroundPosition:"center center",}}>
        <div className="register__box">
          <h2 className="register__title">Registration</h2>
          <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="form__input"
              placeholder="Your Name..."
              {...register("name",{
                required:true,
                maxLength:20,
                pattern: /^[a-záéíóúüñ']+$/i,
              })}
            />
            {
              errors.name?.type==="required" &&(
                <span className="msgError">Name is required</span>
              )
            }
            {
              errors.name?.type==="maxLength" &&(
                <span className="msgError">Name Max Length 20 characters</span>
              )
            }
             {errors.name?.type === "pattern" && (
          <span className="msgError">
            Format invalid only letters [a-záéíóúüñ']
          </span>
        )}
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
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
            />
              {errors.password?.type === "required" && (
          <span className="msgError">Password is required</span>
        )}
        {errors.password?.type === "minLength" && (
          <span className="msgError">
            Password min length should be 8 characters
          </span>
        )}
        {errors.password?.type === "maxLength" && (
          <span className="msgError">
            Password max length should be 20 characters
          </span>
        )}
            <button className="form__button"> <i className="fa-solid fa-arrow-right"></i> Create Account</button>
            <p style={{textAlign:"center", paddingTop:20}}>Already Registered? click <Link to="/login" className="login">here</Link></p>
          </form>
        
        </div>
      </section>
    </>
  );
};
