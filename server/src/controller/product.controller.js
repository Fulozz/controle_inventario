const Product = require('../models/Product.model')
exports.getProducts = async(req, res)=>{
    try{
        const products =  await Product.find()
        res.send(products);
    } catch (err) {
        return res.status(401).send({
            message: 'Erro ao realizar o cadastro, verifique suas credenciais'
        })

    }
};

exports.createProduct = async(req,res)=> {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
      });
      // Salvar o produto
  await product.save();

  // Enviar a resposta
  await res.send(product);
};

exports.searchProduct = async(req, res)=> {
    const product = await Product.findById(req.params.id);

    // Atualizar o produto
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    product.category = req.body.category;
  
    // Salvar o produto
    await product.save();
  
    // Enviar a resposta
    res.send(product);
};