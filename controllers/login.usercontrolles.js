const registerModel = require("../models/register.model");
const loginServices = require("../services/login.services");



exports.checkUser = async(req,res)=>{
     data = req.body
    try {
        
        const tokenfull = await loginServices.postLoginData(data);
        
        res.status(200).send({
            message : "suucess",
            data : tokenfull});
 

    }
    catch {
        console.log ("we got into some trouble");
    }
}


