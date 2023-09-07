const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const app = express()
const bcrypt = require('bcryptjs')
const userController = require('./controllers/UserRegister.controller')

// const bcrypt = require("bcryptjs")


// OBRIGATORIO PARA QUE SEJA POSSIVEL ENVIAR O POST PARA O BANCO DE DADOS
app.use(express.urlencoded({extended: 'false'}))





app.use(express.json())
app.use(cors())



// create the database (mysql

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '123456',
  database: 'cadastro'
}, console.log('Conexao criada'))


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



    const sentUserName = req.body.username
    const sentEmail    = req.body.email
    const sentPassword = req.body.password
    
    // TESTE



    if (sentEmail !== undefined && sentUserName !== undefined && sentPassword !== undefined) {
      // TESTE PARA VALIDAR SE NO BANCO DE DADOS JA POSSUI UM CADASTRO COM O MESMO EMAIL
      
        db.query('SELECT * FROM users WHERE email = ?',[sentEmail], (error, results) => {
            if (error) {
                console.error('Erro ao verificar o email no banco de dados: ' + error.message);
                // Trate o erro adequadamente, como enviar uma resposta de erro ao cliente.
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
                  db.query("INSERT INTO users SET?", {username: sentUserName, email: sentEmail, password: hash}, 
                    (err) => {
                        if (err) {
                          console.error('Erro ao verificar o email no banco de dados: ' + error.message);
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
        console.log(sentUserName,sentEmail,sentPassword)
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

    const sentLoginUserName = req.body.loginUsername
    const sentLoginPassword = req.body.loginPassword


    if (sentLoginUserName !== undefined && sentLoginPassword !== undefined) {
      // TESTE PARA VALIDAR SE NO BANCO DE DADOS JA POSSUI UM CADASTRO COM O MESMO EMAIL
 
        db.query('SELECT * FROM users WHERE username = ?',[sentLoginUserName], (error, results) => {
            if (error) {
              console.error('Erro ao verificar o username no banco de dados: ' + error.message);
              res.status(500).send({ error: 'Erro interno do servidor' });
              }
              if( results.length <= 0 ) {
                console.log({message: 'Usuário não encontrado'} )
                res.status(404).send({ message: 'Usuário não encontrado' });
            }
            else{
              const storedHash = results[0].password;
                bcrypt.compare(sentLoginPassword, storedHash, (err, result)=>{
                  if(err){
                  console.error('Erro ao comparar as senhas: ' + err);
                  res.status(500).send({ error: 'Erro interno do servidor' });
                  } 
                  else {
                    if (result) {
                    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [sentLoginUserName, storedHash],
                    (error, results) => {
                        if (error) {
                          console.error('Erro ao verificar as credenciais no banco de dados: ' + error.message);
                          res.status(500).send({ error: 'Erro interno do servidor' });
                        } 
                        else {
                          if (results.length === 0) {
                            res.status(401).send({ message: 'Credenciais não coincidem' });
                            console.log({ message: 'Credenciais não coincidem' })
                          }
                          else {
                            res.status(200).send({ message: 'Login bem-sucedido' });
                            console.log({ message: 'Login bem-sucedido' })
                          }
                        }
                    });
                  } //db.querry
                  }
                  
                })
                }// else
             }
         );

        
    } else {
        // Caso algum dos campos seja undefined, retorne um erro
        res.status(400).send({ message: 'Missing or undefined fields' });
        console.log(sentUserName,sentEmail,sentPassword)
    }


  }
  })
})


app.listen(3002,()=>{
    console.log("Server is running on port 3002")
})
