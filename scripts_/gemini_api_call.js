// For Node.js environments
import 'dotenv/config'
import { GoogleGenerativeAI } from '@google/generative-ai';

//API SECRET
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

//Create a Gemini Client
const ai = new GoogleGenerativeAI(GEMINI_API_KEY);

// main func declaration
export async function gemini_api_call(user_query) {
    try {
        const model = ai.getGenerativeModel({model: 'gemini-2.0-flash-001'})
        const result = await model.generateContentStream({
            contents: [{role: "user", parts: [{text: user_query}] }],
        });

        const text = result.response.candidates[0]?.content?.parts[0]?.text;
        return text || "No response from Gemini.";
    } catch (error) {
        console.error('Gemini API call failed:', error)
        throw error
    }
   
}
