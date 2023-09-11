const successResponse = (res, data, message = "Request successful") => {
  res.status(200).json({ success: true, data, message });
};

const errorResponse = (res, statusCode, message = "An error occurred") => {
  res.status(statusCode).json({ success: false, message });
};
module.exports = { successResponse, errorResponse };
