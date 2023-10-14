const mongoose = require('mongoose')

// Criar o esquema do modelo
const Schema = mongoose.Schema;

const patrimonioSchema = new Schema({
  host_name: { type: String, maxLenght: 50, required: true},
  serial_number: { type: String, maxLenght: 30, required: true, unique: true},
  category: { type: String, maxLenght: 50, required: true },
  patrimonio: { type: String, maxLenght: 50, required: true, unique: true},
  marca: { type: String, maxLenght: 50, required: true},
  modelo: { type: String, maxLenght: 50, required: true},
  cpu: { type: String, maxLenght: 50, required: true},
  gpu: { type: String, maxLenght: 50, required: true},
  memoriaRam: { type: String, maxLenght: 50, required: true},
  memoriaRam: { type: String, maxLenght: 50, required: true},
  memoriaRam: { type: String, maxLenght: 50, required: true},
},{
  timestamps: true,
  collection: 'Patrimonio'
});




// => Exportar o modelo
const Patrimonio = mongoose.model('Patrimonio', patrimonioSchema);

module.exports = Patrimonio;