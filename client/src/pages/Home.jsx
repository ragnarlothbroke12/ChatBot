import { Link } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "../context/Authcontext";

export default function Home() {
 const { user, token } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-6 py-28 text-center">

      {/* GRADIENT BACKGROUND BLUR */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-25 -left-25 h-75 w-75 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-50 -right-25 h-75 w-75 bg-pink-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Build & Chat with
          <span className="block mt-3 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            AI Agents
          </span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Create projects, attach smart prompts, and interact with powerful AI
          agents using a clean, modern chat interface.
        </p>

        {/* CTA */}
        <div className="mt-12 flex justify-center gap-5 flex-wrap">

          {!user ? (
            <>
              <Link to="/sign-up">
                <button className="px-8 py-4 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition">
                  🚀 Get Started
                </button>
              </Link>

              <Link to="/sign-in">
                <button className="px-8 py-4 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 backdrop-blur hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  🔐 Sign In
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard">
                <button className="px-8 py-4 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition">
                  📊 Go to Dashboard
                </button>
              </Link>

              <Link to="/chat">
                <button className="px-8 py-4 rounded-full border border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white transition">
                  💬 Continue Chat
                </button>
              </Link>
            </>
          )}

        </div>

        {/* Welcome */}
        {user && (
          <div className="mt-10 inline-flex items-center gap-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur px-6 py-3 rounded-full shadow">
            <div className="h-10 w-10 rounded-full bg-linear-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              Welcome back, <span className="font-semibold">{user.name}</span>
            </p>
          </div>
        )}
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-14">
          What You Can Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Projects & Agents"
            desc="Organize multiple AI agents under projects with ease."
            icon="🧠"
          />
          <FeatureCard
            title="Prompt Management"
            desc="Save, reuse, and refine prompts for better responses."
            icon="📝"
          />
          <FeatureCard
            title="Real-time Chat"
            desc="Chat instantly with AI agents powered by OpenAI."
            icon="⚡"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} AI Chatbot Platform. Built with ❤️ by Siyaram
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur p-8 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        {desc}
      </p>
    </div>
  );
}
