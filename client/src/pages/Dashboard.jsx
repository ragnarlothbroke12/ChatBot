import { useEffect, useState } from "react";
import { getUserStats } from "../api/dashboardApi";
import DashboardCard from "../components/DashboardCard";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserStats()
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="loading">Loading Dashboard...</h2>;

  return (
    <div className="dashboard">
      <h1>📊 Dashboard</h1>
      <p className="subtitle">Welcome back 👋</p>

      <div className="dashboard-grid">
        <DashboardCard title="Total Chats" value={stats.totalChats} />
        <DashboardCard title="AI Agents" value={stats.totalAgents} />
        <DashboardCard
          title="Last Login"
          value={new Date(stats.lastLogin).toLocaleString()}
        />
      </div>
    </div>
  );
};

export default Dashboard;
