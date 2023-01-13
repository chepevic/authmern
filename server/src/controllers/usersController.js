const {response}=require("express")
const bcrypt=require("bcryptjs")
const User= require("../models/usersModel");
const {createJWT, compareJWT} = require("../helpers/JWT");

const usersCtrl={
}

usersCtrl.createUser=async (req, resp=response)=>{
    try {
        const {name, password, email}=req.body;
        const validateEmail= await User.find({email:email}); //validate if the email already exists
        if(validateEmail.length>0){
            return resp.status(400).json({
                ok:false,
                message:"The email is already registered"
            })
        }
        else{
            //first encrypt Password 
            const salt=bcrypt.genSaltSync(12);
            const passwordEncrypt=password;
            const hash=bcrypt.hashSync(passwordEncrypt, salt)

            const newUser={
                name,
                email,
                password:hash
            }
            let data={};
            const user= new User(newUser);
             data.user=await user.save();
             data.token= createJWT(data.user); 

            return resp.status(201).json({
                ok:true,
                message:"User Created",
               data
            })
        }

    } catch (error) {

        console.log(error)
        const { errors } = error;
        return resp.status(500).json({
          ok: false,
          msg: "Contact the ADMIN",
          error: errors,
        });
        
    }

};
usersCtrl.getUsers=async(req, resp=response)=>{
    try {
        const data= await User.find();
        return resp.status(200).json({
            ok:true,
            data
        })
        
    } catch (error) {
        console.log(error)
        
    }
};
usersCtrl.getUser=async(req, resp=response)=>{
    try {
        const id=req.params.id
        const data= await User.findById(id);
        return resp.status(200).json({
            ok:true,
            data
        })
        
    } catch (error) {
        console.log(error)
        
    }
};
usersCtrl.deleteUser=async(req, resp=response)=>{

    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        return resp.status(200).json({
          ok: true,
          message: "The user was deleted",
          user,
        });
      } catch (error) {
        console.log(error);
        return resp.status(500).json({
          ok: false,
          msg: "The user was not deleted",
        });
      }

};
usersCtrl.loginUser=async (req, resp=response)=>{

   try {
    const {email, password}=req.body;

    const user= await User.findOne({email});

    if(!user) return resp.status(400).json({
        ok:false,
        message:"Invalid Credentials: Email or password are not correct"
    })

  const verifyPassword= bcrypt.compareSync(password, user.password);

        if (verifyPassword){
            const token= createJWT(user);
            return resp.status(200).json({
                ok:true,
                message:"user logged in",
                uid:user.id,
                name:user.name,
                token
            })
        }
        else{
            return resp.status(400).json({
                ok:false,
                message:"Invalid Credentials: Email or password are not correct",
            })
        }
    
   } catch (error) {
    console.log(error);

    resp.status(404).json({
        ok:false,
        error
    })
    
   }


};
usersCtrl.profileUser=(req, resp=response)=>{
    resp.json({
        ok:true,
        message:"Profile Page"
    })
};
usersCtrl.verifyToken=(req, resp=response)=>{
    try {
        const token=req.params.token

    compareJWT(token);

    if(compareJWT){
       return resp.status(200).json({
            ok:true,
            message:"token valid"
        })

    }
        
    } catch (error) {
        return resp.status(404).json({
            ok:false,
            message:"token invalid"
        })
    }

}
usersCtrl.recoverPassword=async(req, resp=response)=>{
    try {
        const {password, email}=req.body;
        const usuario= await User.findOne({email:email}); //validate if the email is registered
        if(usuario){

            const salt=bcrypt.genSaltSync(12);
            const passwordEncrypt=password;
            const hash=bcrypt.hashSync(passwordEncrypt, salt)
            console.log(usuario._id);

            const response = await User.findOneAndUpdate(usuario._id, {
                password:hash
              });

              console.log(response);

            return resp.status(200).json({
                ok:true,
                message:"The password was updated"
            })
        }
        else{
            return resp.status(400).json({
                ok:false,
                message:"The email is not registerd",
               data
            })
        }

    } catch (error) {

        console.log(error)
        const { errors } = error;
        return resp.status(500).json({
          ok: false,
          message: "Email not registered",
          error: errors,
        });
        
    }

}
module.exports=usersCtrl;

