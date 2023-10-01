const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const computerSchema = new Schema({
    name: { type: String, maxLenght: 50, required: true},
    patrimonio: {type: Number, required: true},
    serial_number:{type: String, unique: true},
    user_ID: { type: String, required: true},
    cpu:{ type: String, required: true},
    gpu:{ type: String, required: true},
    memoria:{ type: String, required: true},
    hard_disk:{ type: String, required: true},
    locate:{ type: String, required: true},
    departamento: {type: String, required: true},
    situacao:{ type: String, required: true}
},{
    timestamps: true,
    collection: 'Computer'
});



computerSchema.statics.findByCredentials = async(serial_number) =>{
    const computer = await Computer.findOne({ serial_number });

    if(!computer){
        throw new Error({ erro: 'Registro invalido'});
    }
    
    return computer;
};


const Computer = mongoose.model('Computer', computerSchema);


module.exports = Computer;