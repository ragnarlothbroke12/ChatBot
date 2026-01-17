import Chat from "../models/chat.model.js";

export const getDashboardStats = async (req, res) => {
  try {
    const userId = req.user.id; 

    const totalChats = await Chat.countDocuments({ userId });

    const recentChats = await Chat.find({ userId })
      .sort({ updatedAt: -1 })
      .limit(5)
      .select("agentId updatedAt");

    res.status(200).json({
      totalChats,
      recentChats,
    });
  } catch (err) {
    console.error("Dashboard Error:", err);
    res.status(500).json({ message: "Dashboard fetch failed" });
  }
};
