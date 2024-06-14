const express = require('express');
const { getUsers } = require('../controllers/UserController');
const { signup, signin } = require('../controllers/AuthController');
const router = express.Router();

router.route('/signup').post(signup);
router.route('/signin').post(signin);
router.route('/').get(getUsers);

module.exports = router;
