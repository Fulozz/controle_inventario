/**
 * file: src/config/mongooseConnection.config.js
 * description: arquivo responsável por fazer a conexão via mongoose'
 * Data: 07/10/2023
 * author: Thiago Silva Andrade
 */

const mongoose = require('mongoose');

// ==> Importar o arquivo: 'db.config.js'
const database = require('./db.config'); // ==> aqui é conexão local: MongoDB

mongoose.Promise = global.Promise;

// ==> Conexão Base de Dados:
mongoose.set("strictQuery", false);

mongoose
  .connect(database.nuvem.DataBaseURL,
    { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    console.log('A Base de Dados foi conectada com sucesso!')
  })
  .catch((err) => {
    console.log(`Erro ao conectar com a Base de Dados...: ${err}`);
    process.exit();
  });