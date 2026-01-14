import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Signin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="flex p-6 max-w-4xl mx-auto flex-col md:flex-row md:items-center gap-10">

        {/* LEFT */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-3 py-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              AI
            </span>{" "}
            Chatbot Platform
          </Link>

          <p className="text-sm mt-6 text-gray-600 dark:text-gray-300">
            Sign-in to manage your AI agents and continue your conversations.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <form
            onSubmit={submit}
            className="flex flex-col gap-5 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full"
          >
            <div>
              <Label value="Email address" className="mb-1 block" />Email address
              <TextInput
                type="email"
                placeholder="name@company.com"
                required
                className="border-gray-400! focus:border-indigo-500! focus:ring-indigo-500!"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label value="Password" className="mb-1 block" />Paassword
              <TextInput
                type="password"
                placeholder="••••••••"
                required
                className="border-gray-400! focus:border-indigo-500! focus:ring-indigo-500!"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="button" class="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 ">
            Sign In
            </button>
          </form>

          <div className="flex gap-2 text-sm mt-5 justify-center ">
            <span className="text-gray-600 dark:text-gray-300 text-xl">
              Don’t have an account?
            </span>
            <Link to="/sign-up" className="text-indigo-600 hover:underline text-xl">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
