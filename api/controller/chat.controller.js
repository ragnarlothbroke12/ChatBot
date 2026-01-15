import Conversation from "../models/conversation.model.js";
import Prompt from "../models/prompt.model.js";

/**
 * SEND MESSAGE (USER)
 */
export const sendMessage = async (req, res, next) => {
  try {
    const { conversationId, message } = req.body;

    if (!conversationId || !message) {
      return res.status(400).json({ message: "conversationId & message required" });
    }

    const conversation = await Conversation.findOne({
      _id: conversationId,
      userId: req.user.id,
    });

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    /**
     * IF FIRST MESSAGE → LOAD SYSTEM PROMPTS
     */
    if (conversation.messages.length === 0) {
      const systemPrompts = await Prompt.find({
        agentId: conversation.agentId,
        userId: req.user.id,
      });

      systemPrompts.forEach((prompt) => {
        conversation.messages.push({
          role: "system",
          content: prompt.content,
        });
      });
    }

    /**
     * PUSH USER MESSAGE
     */
    conversation.messages.push({
      role: "user",
      content: message,
    });

    await conversation.save();

    res.status(200).json(conversation);
  } catch (error) {
    next(error);
  }
};
