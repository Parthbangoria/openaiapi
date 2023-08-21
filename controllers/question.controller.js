const questionservices = require("../services/question.services");


exports.createquestion = async (req,res) =>{
     try {
        let data1 = req.body;
        let question = await questionservices.createasnwer(data1);
        // console.log(question.data.choices[0]);
        // let answer = question.data.choices[0].message.content
        // console.log(answer);
        
        if (question.error){
            return error;
        }
        else if(question){
            res.status(200).send({
                message : "succesfull",
                data : question
            })
        }

     } catch (error) {

        console.error("Error creating user:", error);
        return res.status(500).send({
            message: "can not create user",
        });
        
     }
};