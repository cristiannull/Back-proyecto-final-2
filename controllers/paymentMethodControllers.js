import PaymentMethod from "../models/PaymentMethod.js"

async function create(req,res){
    try{
        const paymentMethod =await PaymentMethod.create({
        name: req.body.name,    
        });
        res.json(paymentMethod);
    }catch(err){
        res.status(500).json("Error del servidor")
    }
}

async function find (req,res){
    try{
        const PaymentMethodId =req.params.id;
        const paymentMethod =await PaymentMethod.findById(PaymentMethodId);
        res.status(200).json(paymentMethod);
    }catch(err){
        res.status(500).json("Error del servidor")
    }
}

async function list(req,res){
    try{
        const paymentMethodList =await PaymentMethod.find();
        res.status(200).json(paymentMethodList);   
    }catch(err){
        res.status(500).json("Error del servidor")
    }
}

async function update(req,res){
    try{
        const paymentMethodEncontrado =await PaymentMethod.findById(req.params.id)

        paymentMethodEncontrado.name =req.body.name || paymentMethodEncontrado.name;

        await paymentMethodEncontrado.save();
        res.json(paymentMethodEncontrado);
    }catch(err){
        res.status(500).json("Error del servidor");
    }
}

async function destroy(req,res){
    try{
        await PaymentMethod.findByIdAndDelete(req.params.id);
        res.json("paymentMethod eliminada");
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