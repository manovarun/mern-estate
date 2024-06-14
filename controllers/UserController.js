const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const AppError = require('../utils/AppError');

exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();

  if (!users) {
    return next(new AppError('Unable find users', 404));
  }

  return res.status(200).json({ status: 'success', users });
});
