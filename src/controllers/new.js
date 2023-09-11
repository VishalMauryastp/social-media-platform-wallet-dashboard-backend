const express = require("express");
const response = require("../helpers/responseHandler");

const New = (req, res) => {
  //   res.send("this new file");
  response.successResponse(res, "hi");
};
const New1 = (req, res) => {
  res.send("this new1 fuc");
};








module.exports = { New, New1,getLogin };
