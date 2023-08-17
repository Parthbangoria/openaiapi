const registerModel = require("../models/register.model");
const jwt = require("jsonwebtoken");


exports.postLoginData = async (data)=>{
    let { email, password} = data;
   
    console.log(data)
   
   
   const user = await registerModel.findOne({ where : {email : email }});
   if(user){
       if ( password === user.password){
          
           console.log(" user exixts")
     

       let token = await jwt.sign({email : email },process.env.SECRET);

        return(token);
       }
       else {
           console.log("there is an error.")
       }
   }
};
