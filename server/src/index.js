require("dotenv").config()
const DBConnect=require("./database/config.js")
const express=require("express");
const cors=require("cors");
const app=express();


DBConnect();
app.use(cors())
app.use(express.json())

//router
app.use("/api/users", require("./router/users"))

//listen server
app.listen(process.env.PORT,()=>{
    console.log(`Running server at port ${process.env.PORT}`)
})
