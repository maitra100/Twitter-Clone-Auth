const User =require('../database/user');
const encryptPassword = require('../utils/encrypt');
const axios=require('axios');

const addUserService= async (details)=>{
    let user=await User.findOne({userName:details.userName});
    if(user) throw new Error("Username already registered");
    user=new User({
        userName:details.userName,
        password:encryptPassword(details.password)
    });
    user=await user.save();
    const response=await axios.post('http://localhost:3001/newUser',{
        userId:user.id,
        userName:user.userName,
        tweets:[],
        following:[]
    })
    return user;
}

module.exports={addUserService}