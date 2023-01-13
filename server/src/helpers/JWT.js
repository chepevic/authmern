const jwt =require("jsonwebtoken");

const createJWT=(user)=>{
    const token= jwt.sign({id:user.id,name:user.name}, process.env.PRIVATE_KEY,{
        expiresIn:"5h"
    })
    return token
}

const compareJWT=(token)=>{
    const decoded= jwt.verify(token, process.env.PRIVATE_KEY);
    if(decoded){
      return true
    }
    else{
        return false
    }
}

module.exports={createJWT, compareJWT};