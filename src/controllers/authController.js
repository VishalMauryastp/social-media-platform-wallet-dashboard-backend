const response = require("../helpers/responseHandler");

const userModel = require("../models/userModel");

const signup = async (req, res) => {
  console.log(req.body);
  const { username, password,email } = req.body;
  await userModel
    .create({
      username: username,
      email: email,
      password: password,
    })
    .then((result) => {
      response.successResponse(res,result);
    })
    .catch((err) => {
      response.errorResponse(err, "signup err");
    });
  //   response.successResponse(res, "signup");
};
const Login = async (req, res) => {
  console.log(req.body);
};

module.exports = { signup, Login };
