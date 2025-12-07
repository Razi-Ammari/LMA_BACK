import express from "express";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

// Protected endpoint for AI assistant messages
router.post("/message", authMiddleware, async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.user.userId;

    if (!message || message.trim() === "") {
      return res.status(400).json({ message: "Message is required" });
    }

    // TODO: Integrate with OpenAI or other LLM here
    // Example: const completion = await openai.chat.completions.create({...});
    
    // Placeholder response for now
    const reply = `This is a placeholder answer to: "${message}"`;

    // TODO: Optionally save conversation to database
    // const conversation = new Conversation({ userId, message, reply });
    // await conversation.save();

    res.json({ 
      reply,
      userId, // For debugging, remove in production
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error("Assistant message error:", err);
    res.status(500).json({ message: "Error processing your message" });
  }
});

// Get conversation history (optional endpoint)
router.get("/history", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    
    // TODO: Fetch conversation history from database
    // const history = await Conversation.find({ userId }).sort({ createdAt: -1 }).limit(50);
    
    res.json({ 
      message: "Conversation history endpoint - to be implemented",
      userId 
    });
  } catch (err) {
    console.error("Fetch history error:", err);
    res.status(500).json({ message: "Error fetching conversation history" });
  }
});

export default router;
