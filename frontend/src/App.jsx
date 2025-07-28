import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatPage from "./pages/ChatPage";
import Landing from "./pages/Landing";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";


function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chat" element={user ? <ChatPage /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;