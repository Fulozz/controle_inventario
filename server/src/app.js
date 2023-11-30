/**
 * file: app.js
 * description: arquivo responsável por fazer a conexão com arquivo 'server.js'
 * data: 07/10/2023
 * author: Thiago Silva Andrade
 */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const mongooseConnection = require("./config/mongooseConnection.config");

const app = express();


// => Rotas da API:

const index = require('./routes/index');
const userRoutes = require('./routes/User.routes');
const patrimonioRoutes = require('./routes/Patrimonio.routes');


app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(morgan('dev'));

app.set("mongoose connection", mongooseConnection);

app.use(index);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/patrimonio', patrimonioRoutes);


module.exports = app;