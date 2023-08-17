const userservices = require("../services/register.services");
const randomstring = require("randomstring");




exports.registerUser = async (req,res) =>{
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
                 message: "Failed to process data.",
             });
         }
 
         return res.status(200).send({
             message: "Successfully processed data.",
             data: result
         });
        };