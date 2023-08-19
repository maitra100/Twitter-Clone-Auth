const tokenVerifyService = require('../services/verify');

const tokenVerify = async (req, res) => {
  try {
    await tokenVerifyService.tokenVerifyService(req.body.token);
    return res.status(200).send('token verified');
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

module.exports = tokenVerify;
