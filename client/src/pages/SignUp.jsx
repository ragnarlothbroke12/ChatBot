import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
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
            Create your account to build and interact with custom AI agents.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <form className="flex flex-col gap-5 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">

            <div>
              <Label value="Username" className="mb-1 block" />Username
              <TextInput
                type="text"
                placeholder="Enter your username"
                id="username"
                required
                className="border-gray-400! focus:border-indigo-500! focus:ring-indigo-500!"
              />
            </div>

            <div>
              <Label value="Email address" className="mb-1 block" /> Email address
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                required
                className="border-gray-400! focus:border-indigo-500! focus:ring-indigo-500!"
              />
            </div>

            <div>
              <Label value="Password" className="mb-1 block" />Password
              <TextInput
                type="password"
                placeholder="••••••••"
                id="password"
                required
                className="border-gray-400! focus:border-indigo-500! focus:ring-indigo-500!"
              />
            </div>

            <button type="button" class="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">
              Sign Up
            </button>
          </form>

          <div className="flex gap-2 text-sm mt-5 justify-center">
            <span className="text-gray-600 dark:text-gray-300 text-xl">
              Already have an account?
            </span>
            <Link to="/sign-in" className="text-indigo-600 hover:underline text-xl">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
