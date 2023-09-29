const User = require('../models/User.model')

const jwt = require('jsonwebtoken')


exports.registerNewUser = async (req, res)=>{
    try {
        let isUser = await User.find({ email: req.body.email});

        if(isUser.length >= 1) {
            return res.status(409).json({ message: 'Sorry! This email is already registered!' });
        }
        const newUser = new User(req.body);
        const user = await newUser.save();
        const token =  await newUser.generateAuthToken();
        return res.status(201).json({ message: 'User created successfully!', user, token})
    } catch (error) {
        res.status(400).json({ error: error })
    }
};


exports.loginUser = async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findByCredentials(email, password);

        if( !user ){
            return res.status(401).send({ 
                error:'Erro ao realizar o login, verifique suas credenciais', 
                userStatus: 'unauthenticated' })
        }
        const token = await user.generateAuthToken()

        return res.status(200).send({ 
            message: ' Usuario(a) logado com sucesso!', 
            user, 
            token, 
            userStatus: 'authenticated'})

    } catch (err) { 
        console.log(err);
        
    }

};

// ==> Método responsável por retornar um determinado 'User'
exports.returnUserProfile = async (req, res) => {
    await res.json( req.userData );
};

exports.validateUser = async(req, res) =>{
    const json = req.body.token
    if(json === undefined || null){
        return  res.status(401).json({
            userStatus: 'unauthenticated',
          });
    }
    
    try{
        const jsonP = JSON.parse(json)
        const token = (jsonP.token)
        const decoded = jwt.decode(token, 'secret')
        console.log(decoded);
        if (decoded !== undefined) {
                  
            console.log('passou aqui');
            return res.status(200).json({
              userStatus: 'authenticated',
            });
          }
          
          
        }  catch (err) { 
            console.log(err, 'erro!!!!!');
            return res.status(401).json({
                userStatus: 'unauthenticated',
              });
        
        
    }
}