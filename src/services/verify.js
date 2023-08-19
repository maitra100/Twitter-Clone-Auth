const verifyJWT = require('../utils/jwtToken');

const tokenVerifyService=async(token)=>{
  const decoded = verifyJWT.verifyJWT(token);
  if (decoded) return decoded;
  throw new Error('Invalid token');
}

module.exports={tokenVerifyService};