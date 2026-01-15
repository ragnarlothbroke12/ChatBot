import Prompt from "../models/prompt.model.js";

export const createPrompt = async (req, res) => {
  try {
    const { title, content, agentId } = req.body;

    if (!title || !content || !agentId) {
      return res.status(400).json({ message: "All fields required" });
    }

    const prompt = await Prompt.create({
      title,
      content,
      agentId,
      userId: req.user.id,
    });

    res.status(201).json(prompt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPromptsByAgent = async (req, res) => {
  try {
    const prompts = await Prompt.find({
      agentId: req.params.agentId,
      userId: req.user.id,
    });

    res.status(200).json(prompts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePrompt = async (req, res) => {
  try {
    const prompt = await Prompt.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!prompt) {
      return res.status(404).json({ message: "Prompt not found" });
    }

    res.status(200).json({ message: "Prompt deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
