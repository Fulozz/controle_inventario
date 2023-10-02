const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller')
const itemController = require('../controller/items.controlller')
const auth  = require('../middleware/auth');

// ==> Rota responsavel por criar o novo 'User': (POST) localhost:3000/api/v1/register
router.post('/register', userController.registerNewUser);

// ==> Rota responsavel por fazer o login de usuarios e verifica;'ao: (POST) localhost:3000/api/v1/login
router.post('/login', userController.loginUser)

// ==> Rota responsavel por fazer a validação de usuario logado ou não logado
router.post('/validate', userController.validateUser)
// ==> Rota responsavel por acessar o perfil do usuario: (GET) localhost:3000/api/v1/userProfile
router.get('/profile', auth, userController.returnUserProfile)

// ==> Rota responsavel por acessar o perfil do usuario: (GET) localhost:3000/api/v1/userProfile
router.get('/dashboard', auth, userController.returnUserProfile)

router.post('/items', itemController.registerNewItem)
module.exports = router