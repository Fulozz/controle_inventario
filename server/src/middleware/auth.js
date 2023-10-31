/**
 * file: src/middlewares/auth.js
 * description: arquivo responsável por confirmar se um determinado(a) 'User' tem autorização
 * acessar um determinado recurso.
 * data: 07/10/2023
 * author: Thiago Silva Andrade
 */

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const json = req.body.token;
  
    try {
      const jsonP = JSON.parse(json);
      const token = (jsonP.token);
      const decodedToken = jwt.decode(token, 'secret');
      
      if(decodedToken < Date.now()){
        return res.status(401).send({
            message: 'Token expirado - Auth.js',
          }) && localStorage.removeItem('jwt')
      }
      if (decodedToken.exp > Date.now()) {
        return res.status(200).send({
          message: 'Token válido',
        });
      } 
      
    } catch (err) {
      return res.status(500).send({
        message: 'error',
      });
    }
};