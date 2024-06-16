const express = require('express');
const { getUsers } = require('../controllers/UserController');
const { signup, signin, google } = require('../controllers/AuthController');
const router = express.Router();

router.route('/signup').post(signup);
router.route('/signin').post(signin);
router.post('/google', google);
router.route('/').get(getUsers);

module.exports = router;
