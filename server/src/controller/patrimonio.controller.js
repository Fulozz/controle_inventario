const Patrimonio = require('../models/Patrimonio.model')
const jwt = require('jsonwebtoken')


exports.getPatrimonioListing = async(req,  res )=>{
    
    try{
        await Patrimonio.find().sort({createdAt: -1})
        .limit(6)
        .then((patrimonios)=>{
            return res.send(patrimonios)
        })
    } catch (err) {
        return res.status(401).send({
            message: 'Erro do servidor'
        })

    }
};

exports.allPatrimonio = async(req, res)=>{
    try{
        await Patrimonio.find().sort({patrimonio: 1}).then((patrimonios)=>{
            return res.status(200).send(patrimonios)
        })
    }
    catch (err) {
        return res.status(401).send({
            message: 'Erro do servidor',
            err: err
        })

    }
}

exports.createPatrimonio = async (req,res)=> {
        

    try{
        let isPatrimonio = await Patrimonio.find({ 
            patrimonio: req.body.patrimonio, serial_number: req.body.serial_number
        })

        if(isPatrimonio.length >= 1){
            return res.status(400).send({ message: 'Patrimonio já registrado' });
        }

        const newPatrimonio = new Patrimonio(req.body);
          // Salvar o produto
        const patrimonio = await newPatrimonio.save();
    
        return res.status(200).send({ message: 'Patrimonio registrado com sucesso', 
        patrimonio })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
    
};

exports.searchItem = async (req, res) =>{
    
    try{
        await Patrimonio.findOne({patrimonio: req.body.patrimonio})
        .then((patrimonio)=>{
            res.status(200).json(patrimonio),
            console.log(patrimonio);
        })
    }
    catch (err) {
        return res.status(401).send({
            message: 'Erro do servidor',
            err: err
        })

    }
}
exports.updatePatrimonio = async (req,res) => {
    const patrimonio = await Patrimonio.findOneAndUpdate({
        patrimonio: req.body.patrimonio
    },{
        $set: req.body   
    });
    if (patrimonio) {
        // Salve as alterações
        await patrimonio.save();
    
        // Retorne o documento atualizado
        res.status(200).send(patrimonio);
      } else {
        // Retorne um erro
        res.status(404).send({
          error: "O patrimônio não foi encontrado",
        });
      }
}

exports.searchPatrimonio = async(req, res)=> {
    const patrimonio = await Patrimonio.findById(req.params.id);
    
    // Atualizar o produto
    patrimonio.name = req.body.name;
    patrimonio.serial_number = req.body.serial_number;
    patrimonio.host_name = req.body.host_name;
    patrimonio.categoria = req.body.categoria;
  
    // Salvar o produto
    await patrimonio.save();
  
    // Enviar a resposta
    res.send(patrimonio);
};