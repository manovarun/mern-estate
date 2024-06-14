const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const AppError = require('../utils/AppError');

exports.signup = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(
      new AppError('Please provide a valid username, email and password', 400)
    );
  }

  let user = await User.findOne({ email });

  if (user) {
    return next(new AppError('User already exists', 400));
  }

  user = await User.create({ username, email, password });

  if (!user) {
    return next(new AppError('Unable to create user', 400));
  }

  return res.status(201).json({ status: 'success', user });
});

exports.signin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError('Please provide a valid email and password'));
  }

  const user = await User.findOne({ email });
  if (!user) return next(new AppError('User not found, please try again', 400));

  const isMatch = await user.matchPassword(password);
  if (!isMatch)
    return next(new AppError('Invalid password, please try again', 401));

  return createSendToken(user, 200, res);
});
