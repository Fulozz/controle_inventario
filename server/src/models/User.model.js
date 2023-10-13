const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


const Schema = mongoose.Schema;
// => Criar o esquema do modelo
const userSchema = new Schema({
    name: { type: String, maxLenght: 50, required: true},
    email: { type: String, maxLenght: 30, required: true, unique: true},
    password: { type: String, maxLenght: 50, required: true},
    tokens: [{
        token: { type: String, required: true}
    }
  ],
},{
    timestamps: true,
    collection: 'users'
});

// => Criptografia da senha
userSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next();
})

// => Gerar a autenticacao

userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const exp = Date.now() + 21600;
    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email, exp: exp}, 'secret');
    user.tokens = user.tokens.concat({ token });
    await user.save();

    return token
};
// => Procura as credenciais na database
userSchema.statics.findByCredentials = async(name, password) =>{
    const user = await User.findOne({ name });

    if(!user){
        throw new Error({ erro: 'Login invalido'});
    }
    const isPassowordMatch = await  bcrypt.compare(password, user.password);
    if(!isPassowordMatch){
        throw new Error({ erro: 'Senha invalida'});
    }
    return user;
};

// => Exportar o modelo
const User = mongoose.model('User', userSchema);


module.exports = User;