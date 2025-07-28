import { useNavigate } from "react-router-dom";
import React from "react";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Real-Time Chat App 💬</h1>
      <p className="mb-8 text-center w-2/3">
        Connect instantly with anyone. Built on MERN + Socket.IO + Redux. Secure and Fast.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 bg-white text-purple-700 font-semibold rounded hover:bg-gray-100"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="px-6 py-2 border border-white font-semibold rounded hover:bg-white hover:text-purple-700"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Landing;