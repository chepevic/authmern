const {model, Schema}=require("mongoose");

const usersModel= new Schema({
    name:{
        type:String,
        required:true,
        maxLength:30
    },
    email:{
        type:String,
        required:true,
        maxLength:60
    },
    password:{
        type:String,
        require:true,
        maxLength:100
    }
})
usersModel.method('toJSON',function(){
    const {__v, _id, ...object} = this.toObject()
    object.id=_id
    return object

})
module.exports= model("users", usersModel)