/**
 * file: src/config/db.config.js
 * description: arquivo responsável por fazer a conexão com a base de dados: MongoDB'
 * Data: 07/10/2023
 * author: Thiago Silva Andrade
 */

const dotenv = require('dotenv')

dotenv.config();
const dbURL = process.env.DB_URI

module.exports = {
    nuvem: {
        DataBaseURL: dbURL,
        secret: "password"
    }
};