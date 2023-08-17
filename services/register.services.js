const registerModel = require("../models/register.model");




exports.createRegisterUser = async(data)=>{
    try {
        const newUser = await registerModel.create(data);
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }


}