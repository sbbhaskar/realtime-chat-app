import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="w-full bg-purple-600 text-white px-6 py-3 flex justify-between items-center shadow relative">
      <div className="font-bold text-xl cursor-pointer" onClick={() => navigate("/chat")}>Chat App</div>
      <div>
        <button className="flex items-center gap-2" onClick={() => setOpen(!open)}>
          <span>{user?.name}</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow z-10">
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { navigate("/profile"); setOpen(false); }}>Profile</div>
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>Logout</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;