const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    try {
        console.log(req.headers)
    const token = req.headers.authorization.replace('Bearer ', '');
// ==> Um console para verificar o token
    console.log(token);

    const decoded = jwt.verify(token,'secret');
    req.userData = decoded;
    next();

    } catch (err) {
        res.status(401).json({ message: 'Falha na autenticacao!', err: err })
    }
};