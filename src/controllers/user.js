const addUserService = require('../services/user');

const addUser = async (req, res) => {
  try {
    const user=await addUserService.addUserService(req.body);
    return res.status(200).send('User added successfully');
  } catch (e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
};

module.exports = addUser;
