import { Routes, Route } from "react-router-dom";
import Index from "../src/pages/Index";
import Login from "../src/pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
