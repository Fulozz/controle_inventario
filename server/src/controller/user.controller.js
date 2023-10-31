/**
 * Arquivo: src/controllers/user.controller.js
 * Descrição: arquivo responsável pelo CRUD da classe: 'User'
 * Data: 07/10/2023
 * Author Thiago Silva Andrade
 */

const User = require('../models/User.model')

const jwt = require('jsonwebtoken')


exports.registerNewUser = async (req, res) => {
    try {
        let isUser = await User.find({ name: req.body.name });

        if (isUser.length >= 1) {
            return res.status(400).send({ message: 'Sorry! This name is already registered!' });
        }
        const newUser = new User(req.body);
        const user = await newUser.save();
        const token = await newUser.generateAuthToken();
        return res.status(200).json({ message: 'User created successfully!', user, token })
    } catch (error) {
        res.status(500).send({ error: error, message: "Erro interno do servidor" })
    }
};


exports.loginUser = async (req, res) => {
    try {
        const name = req.body.name;
        const password = req.body.password;
        const user = await User.findByCredentials(name, password);

        if (user) {
        const token = await user.generateAuthToken()

        return res.status(200).send({
            message: ' Usuario(a) logado com sucesso!',
            user,
            token,
        })
        } 
    } catch (err) {
        return res.status(404).send({
            message: 'Erro ao realizar o login, verifique suas credenciais'
        })
    }
};

// ==> Método responsável por retornar um determinado 'User'
exports.returnUserProfile = async (req, res) => {
  const json = req.body.token;

  try{
    const jsonP = JSON.parse(json);
      const token = (jsonP.token);
      const decodedToken = jwt.decode(token, 'secret');
      const user = decodedToken

      return res.status(200).send({
        id: user._id,
        name: user.name,
        email: user.email,
      });
  } catch (err) {
    return res.status(500).send({
      message: 'error',
    });
  }
  
};


exports.validateUser = async (req, res) => {
    const json = req.body.token;
    console.log(json);
    try {
      const jsonP = JSON.parse(json);
      const token = (jsonP.token);
      const decodedToken = jwt.decode(token, 'secret');
        console.log(decodedToken.exp, Date.now());
        if(!decodedToken){
          return res.status(401).send({
          message: "Algo de errado não está certo"
          })
        }
        if(decodedToken.exp < Date.now()){
          console.log("Menor que");
          return  res.status(401).send({
            message: "Algo de errado não está certo"
          })
        }
        if(decodedToken.exp > Date.now()){
          console.log("Maior que");
          return res.status(200).send({
            message: "Deu certo!"
          })
        }
       
    } catch (err) {
      return res.status(500).send({
        message: "deu problema aqui ó",
      });
    }

}
