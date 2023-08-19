const loginUserService = require('../services/login');

const loginUser = async (req, res) => {
  try {
    const details = await loginUserService.loginUserService(req.body);
    return res.send(details);
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

module.exports = loginUser;
