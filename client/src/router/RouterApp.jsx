import React from 'react'
import { Routes, Route} from "react-router-dom"
import {LoginPage, RegisterPage, DashboardPage } from '../pages'
import { FormPage } from '../pages/FormPage'
import { RecoverPassword } from '../pages/RecoverPasswordPage'
import { AdminRouter } from './AdminRouter'


export default function RouterApp() {
  return (
    <>
   
   <Routes>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/form" element={<FormPage/>}/>
    <Route path="/dashboard" element={<DashboardPage/>}/>
    <Route path="/recoverpassword" element={<RecoverPassword/>}/>
    <Route path="/*" element={<AdminRouter/>}/>
   </Routes>
    </>
  )
}
