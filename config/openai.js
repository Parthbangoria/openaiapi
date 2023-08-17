const { Configuration, OpenAIApi } = require("openai");



const API_KEY = process.env.OPENAI_API_KEY;
const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);



module.exports = openai;