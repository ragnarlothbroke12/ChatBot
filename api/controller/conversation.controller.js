import Conversation from "../models/conversation.model.js";

/**
 * CREATE NEW CONVERSATION
 */
export const createConversation = async (req, res, next) => {
  try {
    const { agentId } = req.body;

    if (!agentId) {
      return res.status(400).json({ message: "agentId is required" });
    }

    const conversation = await Conversation.create({
      userId: req.user.id,
      agentId,
      messages: []
    });

    res.status(201).json(conversation);
  } catch (error) {
    next(error);
  }
};

/**
 * GET ALL CONVERSATIONS OF USER
 */
export const getUserConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find({
      userId: req.user.id
    }).sort({ updatedAt: -1 });

    res.status(200).json(conversations);
  } catch (error) {
    next(error);
  }
};

/**
 * GET SINGLE CONVERSATION
 */
export const getConversationById = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    res.status(200).json(conversation);
  } catch (error) {
    next(error);
  }
};
