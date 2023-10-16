const Patrimonio = require('../models/Patrimonio.model')
const jwt = require('jsonwebtoken')


exports.getPatrimonioListing = async(req,  res )=>{
    
    try{
        await Patrimonio.find().sort({updateAt: -1})
        .limit(6)
        .then((patrimonios)=>{
            return res.json(patrimonios)
        })
    } catch (err) {
        return res.status(401).send({
            message: 'Erro do servidor'
        })

    }
};

exports.allPatrimonio = async(req, res)=>{
    try{
        await Patrimonio.find().sort({createAt: -1}).then((patrimonios)=>{
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
            return res.status(400).json({ message: 'Patrimonio já registrado' });
        }

        const newPatrimonio = new Patrimonio(req.body);
          // Salvar o produto
        const patrimonio = await newPatrimonio.save();
    
        return res.status(200).json({ message: 'Patrimonio registrado com sucesso', 
        patrimonio })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
    
};

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