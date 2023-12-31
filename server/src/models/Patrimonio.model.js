/**
 * file:src/models/Patrimonio.model.js
 * description:  arquivo responsavel pelo modelo da classe 'Patrimonio'
 * data: 07/10/2023
 * author: Thiago Silva Andrade
 */


const mongoose = require('mongoose')

// Criar o esquema do modelo
const Schema = mongoose.Schema;

const patrimonioSchema = new Schema({
  name: { type: String, maxLenght: 50, required: true},
  host_name: { type: String, maxLenght: 50},
  serial_number: { type: String, maxLenght: 30, required: true, unique: true},
  categoria: { type: String, maxLenght: 50, required: true },
  patrimonio: { type: Number, maxLenght: 50, required: true, unique: true},
  marca: { type: String, maxLenght: 50, required: true},
  modelo: { type: String, maxLenght: 50, required: true},
  tipo_impressora: { type: String, maxLenght: 50},
  formato: { type: String, maxLenght: 50},
  tipo_monitor: { type: String, maxLenght: 50 },
  tamanho: { type: String, maxLenght: 50 },
  cpu: { type: String, maxLenght: 50},
  gpu: { type: String, maxLenght: 50},
  memoriaRam: { type: String, maxLenght: 50},
  memoriaRamDDR: { type: String, maxLenght: 50},
  hard_disk: { type: String, maxLenght: 50},
  sistema_operacional: { type: String, maxLenght: 50},
  portas: { type: String, maxLenght: 50},
  poe: { type: String, maxLenght: 50},
  gerenciavel: { type: String, maxLenght: 50},
  num_pa: { type: String, maxLenght: 50},
  local: { type: String, maxLenght: 50, required: true},
  departamento: { type: String, maxLenght: 50, required: true},
  estado: { type: String, maxLenght: 50, required: true},
  createdAtFormat: {
    type: String,
    default: ()=>{
      const createdAt = new Date()
      return createdAt.toLocaleDateString('pt-BR');
    }
  }
},{
  timestamps: true,
  collection: 'Patrimonio'
});




// => Exportar o modelo
const Patrimonio = mongoose.model('Patrimonio', patrimonioSchema);

module.exports = Patrimonio;