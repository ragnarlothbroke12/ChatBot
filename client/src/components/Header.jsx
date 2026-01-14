import { Link } from "react-router-dom";

export default function Header({ onLogout }) {
  return (
    <header className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Title */}
        <Link to="/" className="flex items-center gap-2">
        <div className="text-xl font-bold tracking-wide">
          🤖 ChatBot Platform
        </div>
        </Link>
        {/* Right Section */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-sm opacity-90">
            AI Agent Workspace
          </span>

        <Link to="/sign-in">
          <button
            onClick={onLogout}
            className="bg-white text-indigo-600 px-4 py-1.5 rounded-md text-sm font-semibold
                       hover:bg-indigo-100 transition"
          >
            Sign In
          </button>
        </Link>
        </div>
      </div>
    </header>
  );
}
