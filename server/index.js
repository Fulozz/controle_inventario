const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const app = express()
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



app.post('/register', (req, res)=>{
    
    // const values = [sentEmail, sentUserName, sentPassword];

 // Conexao com o banco de dados e tabela 
const selectDBQuery = 'USE cadastro';

db.query(selectDBQuery, (selectDBError) => {
  if (selectDBError) {
    console.error('Erro ao selecionar o banco de dados: ' + selectDBError.message);
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
                db.query("INSERT INTO users SET?", {username: sentUserName, email: sentEmail, password: sentPassword}, 
                    (err, results) => {
                        if (err) {
                            res.send(err);
                        } else {
                            console.log('User inserted successfully')
                             res.status(400).send({  message: 'User registered!' })
                            
                            }
                    }); //db.querry
                } // else
            }
         );

        
    } else {
        // Caso algum dos campos seja undefined, retorne um erro
        res.status(400).send({ message: 'Missing or undefined fields' });
        console.log(sentUserName,sentEmail,sentPassword)
    }
  }
});

})


app.post('/login', (req, res)=>{
    const selectDBQuery = 'USE cadastro';

db.query(selectDBQuery, (selectDBError) => {
  if (selectDBError) {
    console.error('Erro ao selecionar o banco de dados: ' + selectDBError.message);
  } else {
    console.log('Banco de dados "cadastro" selecionado com sucesso.');



    const sentUserName = req.body.username
    const sentEmail    = req.body.email
    const sentPassword = req.body.password







    
  }
  })
})


app.listen(3002,()=>{
    console.log("Server is running on port 3002")
})
