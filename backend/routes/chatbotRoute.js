import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const router = express.Router();

// Initialize Gemini API with API Key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/chat", async (req, res) => {
  const { query } = req.body;

  if (!query || query.trim() === "") {
    console.warn("Received an empty query.");
    return res.status(400).json({ error: "Query is required." });
  }

  console.log(`User Query: ${query}`);

  const allowedTopics = ["stock", "investment", "finance", "market", "trading", "mutual funds"];
  const isAllowed = allowedTopics.some((topic) => query.toLowerCase().includes(topic));

  if (!isAllowed) {
    console.log("Query not related to finance. Rejecting.");
    return res.json({ answer: "Sorry, I can only answer stock, investment, and finance-related queries." });
  }

  try {
    // Use Gemini 1.5 Flash model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const response = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: query }] }],
    });

    const answer = response.response.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";
    console.log(`AI Response: ${answer}`);

    res.json({ answer });
  } catch (error) {
    console.error("Chatbot API Error:", error.message);
    res.status(500).json({ error: "AI service unavailable. Please try again later." });
  }
});

export default router;
