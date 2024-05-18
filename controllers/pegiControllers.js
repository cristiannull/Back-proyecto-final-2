import Pegi from "../models/pegi.js"

async function create(req,res){
    try{
        const newPegi =await Pegi.create({
        name: req.body.name,    
        });
        res.json(newPegi);
    }catch(err){
        res.status(500).json("Error del servidor")
    }
}

async function find (req,res){
    try{
        const pegiId =req.params.id;
        const pegi =await Pegi.findById(pegiId);
        res.status(200).json(pegi);
    }catch(err){
        res.status(500).json("Error del servidor")
    }
}

async function list(req,res){
    try{
        const pegiList =await Pegi.find();
        res.status(200).json(pegiList);   
    }catch(err){
        res.status(500).json("Error del servidor")
    }
}

async function update(req,res){
    try{
        const pegiEncontrado =await Pegi.findById(req.params.id)

        pegiEncontrado.name =req.body.name || pegiEncontrado.name;

        await pegiEncontrado.save();
        res.json(pegiEncontrado);
    }catch(err){
        res.status(500).json("Error del servidor");
    }
}

async function destroy(req,res){
    try{
        await Pegi.findByIdAndDelete(req.params.id);
        res.json("pegi eliminada");
    }catch(err){
        res.status(500).json("Error del servidor");
    }
}

export default{
    create,
    find,
    list,
    update,
    destroy
};