import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Chat from "./pages/Chat"; // <-- naya import
import Header from "./components/Header";
import PageWrapper from "./components/pageWrapper";
import { AuthProvider } from "./context/Authcontext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <PageWrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/chat" element={<Chat />} /> {/* <-- add this */}
          </Routes>
        </PageWrapper>
      </BrowserRouter>
    </AuthProvider>
  );
}
