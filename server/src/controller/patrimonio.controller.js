const Patrimonio = require('../models/Patrimonio.model')
const fs = require("fs")
const csv = require("csv")
exports.getPatrimonioListing = async(req,  res )=>{
    
    try{
        await Patrimonio.find().sort({createdAt: -1})
        .limit(8)
        .then((patrimonios)=>{
            return res.send(patrimonios)
        })
    } catch (err) {
        return res.status(401).send({
            message: 'Erro do servidor'
        })

    }
};

exports.deletePatrimonio = async (req, res) =>{
    try{
        await Patrimonio.findOneAndDelete({patrimonio: req.body.patrimonio}).then((patrimonios)=>{
            res.status(200).send(patrimonios)
        })
        
    }
    catch (err) {
        return res.status(401).send({
            message: 'Erro do servidor',
            err: err
        })

    }
}

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
            res.status(200).json(patrimonio)
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

exports.countPatrimonios = async (req, res) => {
    const categorias = await Patrimonio.distinct('categoria');
    
    const numerosDeProdutos = [];
    for (const categoria of categorias) {
      const numeroDePatrimonios = await Patrimonio.find({ categoria }).count();
    
        
      numerosDeProdutos.push({
        [categoria]: numeroDePatrimonios,
      });
    }
  
    res.json(numerosDeProdutos);
  };

exports.exportDados = ()=>{
    const data = Patrimonio.find().toArray()
    const csv = data.map((item)=> JSON.stringify(item));
    const filename = "patrimonio.csv";
    fs.writeFile("patrimonio.csv"), csv.join("\n"), (err)=>{
        if(err){
            throw err;
        };
        console.log("Arquivo exportado com sucesso!");
    }
    if (response.ok) {
        // Avisa o usuário que o arquivo foi exportado com sucesso
        console.log("Arquivo exportado com sucesso!");
  
        // Abre o arquivo para download
        response.blob().then((blob) => {
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = filename;
          link.click();
        });
      } else {
        // Avisa o usuário que houve um erro
        console.log("Erro ao exportar arquivo!");
      }
}