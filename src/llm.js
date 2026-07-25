import dotenv from "dotenv";
dotenv.config();

import { ChatGroq } from "@langchain/groq";

const llm = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile", // groq model
  temperature: 0.7,
});

export default llm;
