import { useSelector } from "react-redux";
import React from "react";

function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>
        <div className="text-lg space-y-4">
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Token:</strong> {user?.token?.slice(0, 20)}...</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;