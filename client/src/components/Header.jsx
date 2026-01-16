import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/sign-in");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-extrabold bg-linear-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text"
        >
          AI Agents
        </Link>

        {/* NAV */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Link
                to="/sign-in"
                className="text-gray-700 dark:text-gray-200 font-medium hover:text-indigo-600 transition"
              >
                Sign In
              </Link>

              <Link to="/sign-up">
                <button className="px-5 py-2 rounded-full bg-linear-to-r from-indigo-600 to-pink-500 text-white font-semibold hover:opacity-90 transition">
                  Get Started
                </button>
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-700 dark:text-gray-200 font-medium">
                Hi, {user.name}
              </span>

              <Link
                to="/dashboard"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
