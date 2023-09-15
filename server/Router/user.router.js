const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')





router.post('/login', userController.loginUser)

router.post('/register', userController.registerUser)

router.get('/user/:id', userController.userProfile)


module.exports = router