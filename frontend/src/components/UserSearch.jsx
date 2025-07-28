import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectChat, fetchChats } from "../redux/chatSlice";

function UserSearch() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      if (!keyword.trim()) return setResults([]);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/user?search=${keyword}`,
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        setResults(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, [keyword, user.token]);

  const startChat = async (userId) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/chat`,
        { userId },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      dispatch(fetchChats());
      dispatch(selectChat(res.data));
      setKeyword("");
      setResults([]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mb-4">
      <h3 className="font-bold mb-2">Start New Chat</h3>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search users..."
        className="w-full p-2 border rounded"
      />
      {results.length > 0 && (
        <div className="mt-2 border rounded bg-white shadow text-sm">
          {results.map((u) => (
            <div
              key={u._id}
              onClick={() => startChat(u._id)}
              className="cursor-pointer px-3 py-2 hover:bg-gray-100 border-b"
            >
              {u.name} <span className="text-xs text-gray-500">({u.email})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserSearch;