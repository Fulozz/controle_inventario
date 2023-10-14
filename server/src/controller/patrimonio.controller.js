const Patrimonio = require('../models/Patrimonio.model')
exports.getPatrimonioListing = async(req,  res )=>{
    const category = req.body.category
    try{
        
        await Patrimonio.find({category: category}).sort({updateAt: -1})
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

exports.createPatrimonio = async(req,res)=> {
        const token = req.body.token
        const decodedToken = jwt.decode(token, 'secret');
        const userName = decodedToken.user
    try{
        let findPatrimonio = await Patrimonio.find({ 
            patrimonio: req.body.patrimonio, serial_number: req.body.serial_number
        })
        if(findPatrimonio.length >= 1){
            return res.status(409).json({ message: 'Patrimonio já registrado' });
        }
        const patrimonio = new Patrimonio({
            name: userName,
            patrimonio: req.body.patrimonio,
            serial_number: req.body.serialNumber,
            host_name: req.body.hostName,
            marca: req.body.marca,
            cpu: req.body.cpu,
            gpu: req.body.gpu,
            memoriaRam: req.body.memoriaRam,
            hardDisk: req.body.hardDisk,
            location: req.body.location,
            departamento: req.body.departamento,
            status: req.body.status,
            category: category,
          });
          // Salvar o produto
      await patrimonio.save();
    
      // Enviar a resposta
      await res.send(patrimonio);
    } catch (error) {
        res.status(400).json({ error: error })
    }
    
};

exports.searchPatrimonio = async(req, res)=> {
    const patrimonio = await Patrimonio.findById(req.params.id);

    // Atualizar o produto
    patrimonio.name = req.body.name;
    patrimonio.serial_number = req.body.serial_number;
    patrimonio.host_name = req.body.host_name;
    patrimonio.category = req.body.category;
  
    // Salvar o produto
    await patrimonio.save();
  
    // Enviar a resposta
    res.send(patrimonio);
};