const Product = require('../models/Product.model')
exports.getProductListing = async(req,  res )=>{
    try{
        
        await Product.find({category: "computador"}).sort({updateAt: -1})
        .limit(6)
        .then((products)=>{
            return res.json(products)
        })
    } catch (err) {
        return res.status(401).send({
            message: 'Erro do servidor'
        })

    }
};

exports.createProduct = async(req,res)=> {
    try{
        let findProduct = await Product.find({ 
            patrimonio: req.body.patrimonio, serial_number: req.body.serial_number
        })
        if(findProduct.length >= 1){
            return res.status(409).json({ message: 'Produto já registrado' });
        }
        const product = new Product({
            patrimonio: req.body.patrimonio,
            serial_number: req.body.serial_number,
            host_name: req.body.host_name,
            category: req.body.category,
          });
          // Salvar o produto
      await product.save();
    
      // Enviar a resposta
      await res.send(product);
    } catch (error) {
        res.status(400).json({ error: error })
    }
    
};

exports.searchProduct = async(req, res)=> {
    const product = await Product.findById(req.params.id);

    // Atualizar o produto
    product.name = req.body.name;
    product.serial_number = req.body.serial_number;
    product.host_name = req.body.host_name;
    product.category = req.body.category;
  
    // Salvar o produto
    await product.save();
  
    // Enviar a resposta
    res.send(product);
};