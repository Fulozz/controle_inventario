const mongoose = require('mongoose')

// Criar o esquema do modelo
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, maxLenght: 50, required: true},
  description: { type: String, maxLenght: 30, required: true, unique: true},
  category: { type: String, maxLenght: 50, required: true},
},{
  timestamps: true,
  collection: 'product'
});


// Exportar o modelo
const Product = mongoose.model('Product', productSchema);

module.exports = Product;