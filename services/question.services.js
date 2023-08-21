const questionModel = require("../models/question.model");
const openai = require("../config/openai");


exports.createasnwer = async (question)=>{
    try {
       console.log (question);
     let Question = question.question ;
       console.log(Question);
    let  response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": Question}],
        max_tokens: 700,
        temperature: 0,
      });
      let answers = response.data.choices[0].message.content;
     let data = {
        question : Question,
        answer : answers
     };

     let createquestion = await questionModel.create(data);
    if(!createquestion){
    console.log(error);
    }
else if ( createquestion ){
    return createquestion;
}
     
    } catch (error) {
        console.error("Error creating user:", error);
        throw error; 
    }
    
      
}
