const express = require('express');
const { getUsers } = require('../controllers/UserController');
const { signup } = require('../controllers/AuthController');
const router = express.Router();

router.route('/signup').post(signup);
router.route('/').get(getUsers);

module.exports = router;
