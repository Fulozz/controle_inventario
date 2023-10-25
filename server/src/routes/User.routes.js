const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller')
const productController = require('../controller/patrimonio.controller')
const auth  = require('../middleware/auth');

// ==> Rota responsavel por criar o novo 'User': (POST) localhost:3000/api/v1/register
router.post('/register', userController.registerNewUser);

// ==> Rota responsavel por fazer o login de usuarios e verifica;'ao: (POST) localhost:3000/api/v1/login
router.post('/login', userController.loginUser)

// ==> Rota responsavel por fazer a validação de usuario logado ou não logado
router.post('/validate', userController.validateUser)



// ==> Rota responsavel por criar os patrimonios: (GET) localhost:3000/api/v1/create
router.post('/create',  productController.createPatrimonio)

// ==> Rota responsavel por enviar para o frontend os patrimonios  e informações
router.get('/listing',  productController.getPatrimonioListing)
router.get('/all',  productController.allPatrimonio)
router.get('/patrimonio/:id', productController.searchItem)

// ==> Rota responsavel por atualizar os patrimonios: (GET) localhost:3000/api/v1/update/:id
router.post('/update/:id',  productController.updatePatrimonio)

// ==> Rota responsavel por atualizar os patrimonios: (GET) localhost:3000/api/v1/update/:id
router.post('/delete/:id',  productController.deletePatrimonio)

// ==> Rota responsavel por procurar os patrimonios: (GET) localhost:3000/api/v1/search/:id
router.post('/search/:id', productController.searchItem)

router.get('/patrimonios', productController.countPatrimonios)



// ==> Rota responsavel por acessar o perfil do usuario: (GET) localhost:3000/api/v1/dashboard
router.get('/dashboard', auth, userController.returnUserProfile)

// ==> Rota responsavel por acessar o perfil do usuario: (GET) localhost:3000/api/v1/user
router.post('/user', userController.returnUserProfile)
module.exports = router