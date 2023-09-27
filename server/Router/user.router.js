const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')
const authUsers = require('../ValidateUsers/Auth')




router.post('/login', userController.loginUser)

router.post('/register', userController.registerUser)

router.post('/validate', authUsers.validate)

router.post('/user/:id', userController.userProfile)


module.exports = router