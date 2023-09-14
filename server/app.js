const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
//Express
const app = express()
//OBRIGATORIO PARA QUE SEJA POSSIVEL ENVIAR O POST PARA O BANCO DE DADOS
app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())
app.use(cors())
// Conexao com a base de dados
const db = require('./db/db.config')
// Rotas da API
const userRoutes = require('./Router/user.router')
// Conexão com banco de dados
app.set("MySQL Connection", db)
// Utilização das rotas
app.use('/', userRoutes)
module.exports = app;