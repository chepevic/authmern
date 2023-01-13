import React from 'react'
import { useEffect, useState } from 'react'
import { users } from '../helpers/url'
import { useNavigate} from 'react-router-dom';


export const DashboardPage = () => {

  const [loading, setLoading] = useState(true)

  const navigate=useNavigate();

const verifyToken=async()=>{

    const token=localStorage?.getItem("chepevic@store");
    const resp=await fetch(`${users}/verify/${token}`);
    const data =await resp.json();
    console.log(data);
    if(data.message=="token invalid"){
      return navigate("/login");
    }
    else{
     setLoading(!loading)
    }
}

useEffect(()=>{
    verifyToken();
},[])
const LogOut=()=>{
    localStorage.removeItem("chepevic@store");
    return navigate("/");
}

  return (
    <>
    {
      loading?
      <h2 className='text-center'>Is loading...</h2>
      :
     <>
     <h2 className='text-center'>Welcome to Your Dashboard</h2>
    <button onClick={LogOut} className="logout">Log out</button>
    <div className="container">
      <img src="images/image4.jpg" alt="Imagen" />
    </div>
     </>
    }
    </>
  )
}
