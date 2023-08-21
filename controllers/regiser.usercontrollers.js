const userservices = require("../services/register.services");
const randomstring = require("randomstring");




exports.registerUser = async (req,res) =>{
 try {
    let passwords = randomstring.generate({
        length: 8,
        charset: 'alphanumeric'
      });
      console.log(passwords)
   let data = {
         email : req.body.email,
         password : passwords
        }
   
         const result = await userservices.createRegisterUser(data);

         if (!result) {
             return res.status(500).send({
                 message: "can not create user",
             });
         }
     else{
         return res.status(200).send({
             message: "successfully created user",
             data: result
         });}
        }
 catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).send({
        message: "can not create user",
    });
 }
};
    
       