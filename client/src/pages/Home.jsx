import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Build & Chat with Your
          <span className="block mt-2 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            AI Agents
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
          Create projects, attach prompts, and interact with intelligent AI agents
          using a simple chat interface powered by OpenAI.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link to="/sign-up">
            <button type="button" class="text-white bg-linear-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">
            Get Started
            </button>
          </Link>
{/* 
          <Link to="/sign-in">
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">
            Sign In</button>
          </Link> */}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What You Can Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <FeatureCard
            title="Projects & Agents"
            desc="Create multiple projects and assign one or more AI agents to each project."
          />

          <FeatureCard
            title="Prompt Management"
            desc="Store, update, and reuse prompts associated with each agent or project."
          />

          <FeatureCard
            title="Chat Interface"
            desc="Ask questions and get real-time responses from your AI agents."
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

/* Feature Card Component */
function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        {desc}
      </p>
    </div>
  );
}
