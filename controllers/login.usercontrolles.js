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
    catch(error) {
        console.error("Error creating user:", error);
    return res.status(500).send({
        message: "can not create user",
    });
    }
}


