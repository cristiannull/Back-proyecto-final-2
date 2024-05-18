import Theme from "../models/theme.js"

async function create(req,res){
    try{
        const newTheme =await Theme.create({
        name: req.body.name,    
        });
        res.json(newTheme);
    }catch(err){
        res.status(500).json("Error del servidor")
    }
}

async function find (req,res){
    try{
        const themeId =req.params.id;
        const theme =await Theme.findById(themeId);
        res.status(200).json(theme);
    }catch(err){
        res.status(500).json("Error del servidor")
    }
}

async function list(req,res){
    try{
        const themeList =await Theme.find();
        res.status(200).json(themeList);   
    }catch(err){
        res.status(500).json("Error del servidor")
    }
}

async function update(req,res){
    try{
        const themeEncontrado =await Theme.findById(req.params.id)

        themeEncontrado.name =req.body.name || themeEncontrado.name;

        await themeEncontrado.save();
        res.json(themeEncontrado);
    }catch(err){
        res.status(500).json("Error del servidor");
    }
}

async function destroy(req,res){
    try{
        await Theme.findByIdAndDelete(req.params.id);
        res.json("theme eliminada");
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