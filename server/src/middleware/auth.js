const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const json = req.body.token;
  
    try {
      const jsonP = JSON.parse(json);
      const token = (jsonP.token);
      const decodedToken = jwt.decode(token, 'secret');
      if (decodedToken.exp > Date.now()) {
        return res.status(200).send({
          message: 'Token válido',
          userStatus: 'authenticated',
        });
      } 
      if(decodedToken <= Date.now()){
        return res.status(401).send({
            message: 'Token expirado',
          }) && localStorage.removeItem('jwt')
      }
      
    } catch (err) {
      return res.status(500).send({
        message: 'error',
      });
    }
};