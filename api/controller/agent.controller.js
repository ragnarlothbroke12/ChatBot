import Agent from "../models/agent.model.js";
import Project from "../models/Project.model.js";

export const createAgent = async (req, res) => {
  try {
    const { name, description, projectId } = req.body;

    if (!name || !projectId) {
      return res.status(400).json({ message: "Name & projectId required" });
    }


    const project = await Project.findOne({
      _id: projectId,
      userId: req.user.id,
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const agent = new Agent({
      name,
      description,
      projectId,
      userId: req.user.id,
    });

    await agent.save();
    res.status(201).json(agent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getAgentsByProject = async (req, res) => {
  try {
    const agents = await Agent.find({
      projectId: req.params.projectId,
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(agents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const updateAgent = async (req, res) => {
  try {
    const agent = await Agent.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { $set: req.body },
      { new: true }
    );

    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }

    res.status(200).json(agent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const deleteAgent = async (req, res) => {
  try {
    const agent = await Agent.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }

    res.status(200).json({ message: "Agent deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
