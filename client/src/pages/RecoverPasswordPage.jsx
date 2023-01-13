import React from 'react'
import { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { url, users } from "../helpers/url";
import Swal from 'sweetalert2'

export const RecoverPassword = () => {
  let navigate = useNavigate();


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit=async (dataForm)=>{
    if(dataForm){
      const resp=await fetch(`${users}/recoverpassword`,{
        method:"POST",
        body:JSON.stringify(dataForm),
        headers:{
          "content-type": "application/json",
        }
      })
      const data=await resp.json();
 

      if(data.message=="The password was updated"){
        Swal.fire({
          title: 'Success!',
          text: data.message,
          icon: 'success',
          confirmButtonText: 'Close',
          confirmButtonColor:'#3A4F7A',
          iconColor:"#144272"
        })
        setTimeout(()=>{
          return navigate("/login");
        },1500)
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
    <section className="register" style={{backgroundImage:"url(images/image1.jpg)", backgroundSize:"cover", backgroundPosition:"center center"}}>
        <div className="register__box">
          <h2 className="register__title">Recover Password</h2>
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
              placeholder="New Password..."
              autoComplete="off"
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

            <button className="form__button"><i className="fa-solid fa-arrow-right"></i> Send Request</button>
           
          </form>
        
        </div>
      </section>
    </>
  )
}
