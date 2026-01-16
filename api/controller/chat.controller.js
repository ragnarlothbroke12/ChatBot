import Chat from "../models/chat.model.js";
import Prompt from "../models/prompt.model.js";
import Groq from "groq-sdk";
console.log("GROQ KEY:", process.env.GROQ_API_KEY);

if (!process.env.GROQ_API_KEY) {
  throw new Error("GROQ_API_KEY missing. Check .env loading");
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

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
    next(err);
  }
};

export const sendMessage = async (req, res, next) => {
  try {
    const { agentId, message } = req.body;

    if (!agentId || !message) {
      return res.status(400).json({ message: "agentId & message required" });
    }

    const chat = await Chat.findOne({
      agentId,
      userId: req.user.id,
    });

    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    chat.messages.push({
      role: "user",
      content: message,
    });

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: chat.messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const aiReply = completion.choices[0]?.message?.content || "No response";

    chat.messages.push({
      role: "assistant",
      content: aiReply,
    });

    await chat.save();

    res.status(200).json(chat);
  } catch (err) {
    next(err);
  }
};
