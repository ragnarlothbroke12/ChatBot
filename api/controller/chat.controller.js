import Chat from "../models/chat.model.js";
import Prompt from "../models/prompt.model.js";
import Groq from "groq-sdk";

// Initialize Groq client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Get existing chat or create a new one with system prompts
export const getOrCreateChat = async (req, res, next) => {
  try {
    const { agentId } = req.params;

    let chat = await Chat.findOne({
      agentId,
      userId: req.user.id,
    });

    if (!chat) {
      const systemPrompts = await Prompt.find({
        agentId,
        userId: req.user.id,
      });

      chat = await Chat.create({
        agentId,
        userId: req.user.id,
        messages: systemPrompts.map((p) => ({
          role: "system",
          content: p.content,
        })),
      });
    }

    res.status(200).json(chat);
  } catch (err) {
    console.log("GET OR CREATE CHAT ERROR:", err);
    next(err);
  }
};

// Send user message & get AI response
export const sendMessage = async (req, res, next) => {
  try {

    const { agentId, message } = req.body;

    if (!agentId || !message) {
      return res.status(400).json({ message: "agentId & message required" });
    }

    const chat = await Chat.findOne({ agentId, userId: req.user.id });
    if (!chat) return res.status(404).json({ message: "Chat not found" });

    // Add user message
    chat.messages.push({ role: "user", content: message });

    const groqMessages = chat.messages
      .slice(-10) // sirf last 10 messages
      .map((m) => ({ role: m.role, content: m.content }));
    // AI Reply fallback
    let aiReply = "This is a test reply from AI!";

    try {
      const completion = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: groqMessages,
      });

      // If Groq responds, use that
      aiReply = completion.choices[0]?.message?.content || aiReply;
      
    } catch (e) {
      console.log("Groq AI call failed, using fallback:", e.message || e);
    }

    // Add AI response to chat
    chat.messages.push({ role: "assistant", content: aiReply });

    await chat.save();

    res.status(200).json(chat);
  } catch (err) {
    console.log("SEND MESSAGE ERROR:", err);
    next(err);
  }
};
