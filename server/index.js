const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config();

// const secretKey = process.env.SECRET_KEY;
const app = express()


// OBRIGATORIO PARA QUE SEJA POSSIVEL ENVIAR O POST PARA O BANCO DE DADOS
app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())
app.use(cors())

// Conexao com a base de dados
const db = require('./db/db.config')

app.post('/register',  (req, res)=>{

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
                             res.status(400).send({  message: 'User registered!' })
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
} )



app.post('/login', (req, res)=>{
  const selectDBQuery = 'USE cadastro';

db.query(selectDBQuery, (selectDBError) => {
if (selectDBError) {
  console.error('Erro ao selecionar o banco de dados: ' + selectDBError.message);
} else {
  console.log('Banco de dados "cadastro" selecionado com sucesso.');

  const sentLoginEmail = req.body.loginEmail
  const sentLoginPassword = req.body.loginPassword
  
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
                const userRole = results[0].role;
                const token = jwt.sign({
                  user: results[0]
                }, `${process.env.SECRET_KEY}`, { // é necessario estar entre `para funcionar`
                  expiresIn: '7h'
                })
                if (userRole === 'admin') {
                  // Usuário é um administrador, pode acessar recursos específicos
                  res.status(200).send({
                    message: 'Login bem-sucedido',
                    role: userRole,
                    token: token
                  })
                  console.log({message: 'Vc ta na parte de admin'})
                  
                }
                if (userRole === 'user') {

                  // Usuário é um usuário normal, pode acessar recursos específicos
                  res.status(200).send({
                    message: 'Login bem-sucedido',
                    role: userRole,
                    token: token
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
})
// app.get('/api/auth/me', (req, res) => {
//   // Verifica se o usuário está autenticado
//   if (!req.user) {
//     // Redireciona o usuário para a página de login
//     res.redirect('/');
//     return;
//   }

//   // Retorna as informações do usuário autenticado
//   res.json({
//     id: req.user.id,
//     name: req.user.name,
//     email: req.user.email,
//     role: req.user.role,
//     token: req.token
//   });
// });

const port = 3006
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})










