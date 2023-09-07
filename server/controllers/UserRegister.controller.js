const bcrypt = require('bcryptjs')
const db = require('../db/db.config')

exports.registerNewUser = async (req, res)=>{
    
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
                  return console.log('Cadastro ja existe ' + sentUserName,sentEmail,sentPassword)      
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
  
  }