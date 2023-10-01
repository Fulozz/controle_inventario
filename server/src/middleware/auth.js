const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.replace('Bearer ', '');
        // ==> Um console para verificar o token
        const decoded = jwt.verify(token, 'secret');
        req.userData = decoded;
        next();

    } catch (err) {
        res.status(401).json({ message: 'Falha na autenticacao!', err: err })
    }
};