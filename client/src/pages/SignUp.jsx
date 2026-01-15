import { useState } from "react";
import { Alert, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      return setErrorMessage("Please fill in all fields");
    }

    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        return setErrorMessage(data.message || "Signup failed");
      }

      navigate("/sign-in");
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 px-4">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="text-4xl font-extrabold text-white">
            <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg">
              AI
            </span>{" "}
            Chatbot
          </Link>
          <p className="text-gray-300 mt-3 text-sm">
            Create your account and start building 🚀
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <TextInput
            type="text"
            id="name"
            placeholder="Username"
            required
            onChange={handleChange}
            className="bg-white/80"
          />

          <TextInput
            type="email"
            id="email"
            placeholder="Email address"
            required
            onChange={handleChange}
            className="bg-white/80"
          />

          <TextInput
            type="password"
            id="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="bg-white/80"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2.5 text-white font-semibold tracking-wide hover:opacity-90 transition disabled:opacity-70"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <Spinner size="sm" />
                Creating account...
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        {/* Error */}
        {errorMessage && (
          <Alert color="failure" className="mt-5">
            {errorMessage}
          </Alert>
        )}

        {/* Footer */}
        <div className="text-center mt-6 text-gray-300">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-indigo-400 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
