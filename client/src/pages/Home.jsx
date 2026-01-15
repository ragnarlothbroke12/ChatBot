import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Build & Chat with
          <span className="block mt-3 bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent bg-clip-text">
            Your AI Agents
          </span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-200">
          Create projects, attach intelligent prompts, and chat with powerful AI agents
          through a clean and interactive interface.
        </p>

        <div className="mt-12 flex justify-center gap-5">
          <Link to="/sign-up">
            <button className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition">
              Get Started 🚀
            </button>
          </Link>

          <Link to="/sign-in">
            <button className="px-6 py-3 rounded-xl font-semibold border border-white/30 hover:bg-white/10 transition">
              Sign In
            </button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          What You Can Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Projects & Agents"
            desc="Create multiple projects and assign one or more AI agents to each project."
            emoji="🧠"
          />
          <FeatureCard
            title="Prompt Management"
            desc="Store, update, and reuse prompts for consistent and smarter responses."
            emoji="📝"
          />
          <FeatureCard
            title="Real-time Chat"
            desc="Ask questions and get instant responses from your AI agents."
            emoji="💬"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-24">
        <h3 className="text-2xl font-semibold">
          Ready to build your AI workspace?
        </h3>
        <Link to="/sign-up">
          <button className="mt-6 px-7 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 font-semibold hover:opacity-90 transition">
            Start Free Today
          </button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/20 py-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} AI Chatbot Platform · Built with ❤️ by Siyaram
      </footer>
    </div>
  );
}

/* Feature Card */
function FeatureCard({ title, desc, emoji }) {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-7 rounded-2xl shadow-lg hover:scale-105 transition">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-200">{desc}</p>
    </div>
  );
}
