import { useState } from "react";
import Login from "./Signin";
import Register from "./SignUp";

export default function AuthPage({ onAuth }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? <Login onLogin={onAuth} /> : <Register onRegister={() => setIsLogin(true)} />}
      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? "Signup" : "Login"}
      </button>
    </>
  );
}
