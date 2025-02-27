import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{ role: "system", content: "You are a financial assistant providing stock and market insights." }, { role: "user", content: query }],
      temperature: 0.5,
      max_tokens: 150,
    });

    const answer = response.choices?.[0]?.message?.content || "No response from AI.";
    console.log(`AI Response: ${answer}`);

    res.json({ answer });
  } catch (error) {
    console.error("Chatbot API Error:", error.message);
    res.status(500).json({ error: "AI service unavailable. Please try again later." });
  }
});

export default router;
