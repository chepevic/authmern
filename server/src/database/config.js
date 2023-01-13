const mongoose=require("mongoose");

const DBConnect=async()=>{
try {
    await mongoose.connect(process.env.DATABASE_API);
    console.log("Database connected")
    
} catch (error) {
    console.log("error")
     throw new Error ("Error connecting Database")
    
}

}
module.exports=DBConnect;