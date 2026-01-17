import { useEffect, useState } from "react";
import { getUserStats } from "../api/dashboardApi";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const data = await getUserStats();
        setStats(data);
      } catch (err) {
        console.error("Error fetching dashboard stats:", err);
      }
    }

    fetchStats();
  }, []);

  if (!stats) return <div className="p-4">Loading dashboard...</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-semibold">Total Chats</h2>
        <p className="text-xl">{stats.totalChats}</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Recent Chats</h2>
        {stats.recentChats.map((c, i) => (
          <div key={i} className="text-sm text-gray-600">
            Agent: {c.agentId}
          </div>
        ))}
      </div>
    </div>
  );
}
