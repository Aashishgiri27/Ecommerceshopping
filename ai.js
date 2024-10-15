const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDxi65BYrGdBRULE2D-RvAsA0yrhqtGF98");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
async function run() {
    const prompt = 'explain hash map in js'
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  
  run();
