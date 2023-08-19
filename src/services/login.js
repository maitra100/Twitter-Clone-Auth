const User =require('../database/user');
const encryptPassword = require('../utils/encrypt');
const bcrypt=require('bcrypt');
const generateToken = require('../utils/jwtToken');

const loginUserService=async (details)=>{
    const user=await User.findOne({userName:details.userName});
    if(!user) throw new Error("invalid User Name");
    const compare = await bcrypt.compareSync(details.password, user.password);
    if(compare){
        const token = generateToken.generateToken({ userName: user.userName,userId:user.id });
        return {token:token,id:user.id};
    }
    throw new Error('Invalid User name or password');
}
module.exports={loginUserService}