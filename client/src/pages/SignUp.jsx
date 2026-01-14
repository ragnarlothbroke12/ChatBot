import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.password) {
    setErrorMessage("Please fill in all fields");
    return;
  }

  try {
    setLoading(true);
    setErrorMessage(null);

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      setLoading(false);
      setErrorMessage(data.message || "Signup failed");
      return;
    }

    navigate("/sign-in");
  } catch (err) {
    setErrorMessage(err.message);
    setLoading(false);
  }
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
            Create your account to build and interact with custom AI agents.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <form className="flex flex-col gap-5 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>

            <div>
              <Label value="Username" className="mb-1 block" />Username
              <TextInput
                type="text"
                placeholder="Enter your username"
                id="name"
                required
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                className="border-gray-400! focus:border-indigo-500! focus:ring-indigo-500!"
              />
            </div>

            <button type="submit" className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5" disabled={loading}>
               {
            loading ? (
              <>
              <Spinner size='sm'/> 
              <span className="pl-3">Loading...</span>
              </>
            ) : 'Sign Up'
            } 
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
          {
          errorMessage && (
            <Alert className="mt-5" color='failure'>
              {errorMessage}
            </Alert>
          )
        }
        </div>
      </div>
    </div>
  );
}
