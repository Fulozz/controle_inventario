const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    patrimonio: { type: String, required: true },
    descricao: { type: String, required: true },
    serial_number: { type: String, required: true },
  });
  
  const ItemModel = mongoose.model('Item', ItemSchema);
  
  // Verifica se o item já existe
  const item = ItemModel.findOne({
    patrimonio: item.patrimonio,
    descricao: item.descricao,
    serial_number: item.serial_number,
  });
  
  // Inclui o item se ele não existir
  if (!item) {
    item.save();
  }
const Item = mongoose.model('Item', itemSchema);


module.exports = Item;