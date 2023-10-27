const express = require('express')
const router = express.Router();
const productController = require('../controller/patrimonio.controller')



// ==> Rota responsavel por criar os patrimonios: (GET) localhost:3000/api/v1/create
router.post('/create',  productController.createPatrimonio)

// ==> Rota responsavel por enviar para o frontend os patrimonios  e informações
router.get('/listing',  productController.getPatrimonioListing)
router.get('/all',  productController.allPatrimonio)
router.get('/patrimonio/:id', productController.searchItem)

// ==> Rota responsavel por atualizar os patrimonios: (GET) localhost:3000/api/v1/update/:id
router.post('/update/:id',  productController.updatePatrimonio)

// ==> Rota responsavel por atualizar os patrimonios: (GET) localhost:3000/api/v1/update/:id
router.delete('/delete/:id',  productController.deletePatrimonio)

// ==> Rota responsavel por procurar os patrimonios: (GET) localhost:3000/api/v1/search/:id
router.post('/search/:id', productController.searchItem)

router.get('/patrimonios', productController.countPatrimonios)

router.get('/exportar', productController.exportDados)
module.exports = router