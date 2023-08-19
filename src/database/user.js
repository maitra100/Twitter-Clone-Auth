const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        minlength:5,
        maxlength:100,
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:100,
    }
  });
  
  const User=mongoose.model("User",userschema);

  module.exports=User;