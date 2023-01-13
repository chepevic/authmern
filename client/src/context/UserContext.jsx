import { createContext } from "react";

export const UserContext=createContext();

export const UserProvider=({children})=>{

const user={
    isLogged:false,
    id:null,
    name:null,
    email:null
}
   return(
    <UserContext.Provider value={user}>
    {children}
</UserContext.Provider>
   )
}