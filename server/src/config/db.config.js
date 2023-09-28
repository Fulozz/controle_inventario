
const dotenv = require('dotenv')

dotenv.config();
const dbURL = process.env.DB_URI

module.exports = {
    nuvem: {
        DataBaseURL: dbURL,
        secret: "password"
    }
};