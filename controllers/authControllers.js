import jwt from "jsonwebtoken";
import Userlogin from "../models/UserLogin.js"

async function login(req, res) {
    const userlogin = await Userlogin.findOne({ email: req.body.email })
    if (userlogin && userlogin.hashCompare(req.body.password)) {
        const token = jwt.sign({ id: userlogin.id }, process.env.JWT_SECRET)
        return res.json({ token })
    } else {
        return res.status(404).json("Las credenciales no son válidas")
        
    }
    
}
async function tokenIsValid(req, res) {
    if (req.auth) {
        return true
    } else {
        return false
    }
}

export default { login,tokenIsValid }
