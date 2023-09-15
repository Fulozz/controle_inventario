exports.validate = async (req, res, next)=>{
  
  // Obter o token do usuário
  const token = req.body.token

  // Validar o token
  const validateToken = (token, secret_key) => {
    // Validar o token
    try {
      const decoded = jwt.verify(token, secret_key);
      return decoded;
    } catch (error) {
      // Token inválido
      return false;
    }
  };

  const decoded = validateToken(token, `${process.env.SECRET_KEY}`);
  if (!decoded) {
    res.status(401).send({ message: 'Credenciais não coincidem' });
    console.log({ message: 'Credenciais não coincidem' });
  } 
  else{
    res.status(200).send(decoded)
    console.log(decoded)
  }
}