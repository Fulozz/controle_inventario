const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const db = require('../db/db.config')



exports.loginUser = async (req, res)=>{
  const selectDBQuery = 'USE cadastro';

db.query(selectDBQuery, (selectDBError) => {
if (selectDBError) {
  console.error('Erro ao selecionar o banco de dados: ' + selectDBError.message);
} else {
  console.log('Banco de dados "cadastro" selecionado com sucesso.');

  const sentLoginEmail = req.body.email
  const sentLoginPassword = req.body.password
  
  if (sentLoginEmail !== undefined && sentLoginPassword !== undefined) {
    // TESTE PARA VALIDAR SE NO BANCO DE DADOS JA POSSUI REALMENTE UM CADASTRO

      db.query('SELECT * FROM user WHERE email = ?',[sentLoginEmail], (err, results) => {
          if (err) {
            res.status(500).send({ error: 'Erro interno do servidor' });
            console.error('Erro ao verificar o username no banco de dados: ' + err.message);
            }
            if( results.length <= 0 ) {
              res.status(404).send({ message: 'Usuário não encontrado' });
              console.log({message: 'Usuário não encontrado'})
          }
          else{
            const storedHash = results[0].password;
            
            
            bcrypt.compare(sentLoginPassword, storedHash, (compareError, result) => {
              if (compareError) {
                res.status(500).send({ error: 'Erro interno do servidor' });
                console.error('Erro ao comparar as senhas: ' + compareError.message);
              }
      
              if (result) {
                const id = results[0].id;
                const userRole = results[0].role;
                const loginToken = jwt.sign({
                  user: results[0]
                }, `${process.env.SECRET_KEY}`, { // é necessario estar entre `para funcionar`
                  expiresIn: '7h'
                })
                if (userRole === 'admin') {
                  
                  // Usuário é um administrador, pode acessar recursos específicos
                  
                  res.status(200).send({
                    message: 'Login bem-sucedido',
                    role: userRole,
                    token: loginToken,
                    id: id
                  })
                  console.log({message: 'Vc ta na parte de admin'})
                  
                }
                if (userRole === 'user') {

                  // Usuário é um usuário normal, pode acessar recursos específicos
                  res.status(200).send({
                    message: 'Login bem-sucedido',
                    role: userRole,
                    token: loginToken,
                    id: id
                  })
                  console.log({message: 'Vc ta na parte de user'})

                  // Teste comentado abaixo caso de problema no JWT
                  // const decoded = jwt.verify(token, `${process.env.SECRET_KEY}`);
                  // console.log(decoded);
                }               
              } else {
                res.status(401).send({ message: 'Credenciais não coincidem' });
                console.log({ message: 'Credenciais não coincidem' });
              }
                } //db.querry   
              )}// else
           }
       );
   
  } else {
      // Caso algum dos campos seja undefined, retorne um erro
      res.status(400).send({ message: 'Missing or undefined fields' })
  }
}
})
}


exports.registerUser = async (req, res)=>{

  const saltRounds = 8

 // Conexao com o banco de dados e tabela 
const selectDBQuery = 'USE cadastro';

db.query(selectDBQuery, (selectDBError) => {
  if (selectDBError) {
    console.error('Erro ao selecionar o banco de dados: ' + selectDBError.message);
    res.status(500).send({ error: 'Erro interno do servidor' });
  } else {
    console.log('Banco de dados "cadastro" selecionado com sucesso.');

    const sentUsername = req.body.username
    const sentEmail    = req.body.email
    const sentPassword = req.body.password


    if (sentEmail !== undefined && sentUsername !== undefined && sentPassword !== undefined) {
      // TESTE PARA VALIDAR SE NO BANCO DE DADOS JA POSSUI UM CADASTRO COM O MESMO EMAIL
        db.query('SELECT * FROM user WHERE email = ?',[sentEmail], (err, results) => {
            if (err) {
                console.error('Erro ao verificar o email no banco de dados: ' + err.message);
                res.status(500).send({ error: 'Erro interno do servidor' })
              } 
            if( results.length > 0 ) {
              res.status(401).send({ message: 'Usuario já possui uma conta' });
              console.log({ message: 'Usuario já possui uma conta' })   
            } else{
              // criptografia da senha 
              bcrypt.hash(sentPassword, saltRounds, (err, hash)=>{
                if(err){
                  console.error('Erro ao criar o hash da senha: ' + err);
                  res.status(500).send({ error: 'Erro interno do servidor' });
                }else {
                  db.query("INSERT INTO user SET?", 
                  {username: sentUsername, email: sentEmail, password: hash, role: 'user'}, 
                    (err) => {
                        if (err) {
                          console.error('Erro ao verificar o email no banco de dados: ' + err.message);
                          res.status(500).send({ error: 'Erro interno do servidor' });
                        } else {
                            console.log('User inserted successfully')
                             res.status(200).send({  message: 'User registered!' })
                            }
                        }); //db.querry
                     } //else
                  }) //bcrypt
                }  
            }
         );

        
    } else {
        // Caso algum dos campos seja undefined, retorne um erro
        res.status(400).send({ message: 'Missing or undefined fields' });
        console.log(sentUsername,sentEmail,sentPassword)
    }
  }
});
} 

exports.userProfile = async (req,res)=>{
  const id = req.body.id;
  
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
  db.query('SELECT * FROM user WHERE id = ?',[id], (err, results) => {
    if (err) {
      console.error('Erro ao verificar o email no banco de dados: ' + err.message);
      res.status(500).send({ error: 'Erro interno do servidor' })
    } else {
      return results;
    }
  })
  // O token é válido
  // Obter as informações do usuário
  const user = {
    id,
    decoded,
  };

  // Retornar as informações do usuário
  res.status(200).send(user);
}

