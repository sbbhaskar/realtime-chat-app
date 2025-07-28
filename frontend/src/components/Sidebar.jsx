import { useEffect } from 'react';
import React from "react";

import { useDispatch, useSelector } from 'react-redux';
import { fetchChats, selectChat } from '../redux/chatSlice';
import UserSearch from './UserSearch';

function Sidebar() {
  const dispatch = useDispatch();
  const { chats, selectedChat } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    <div className="w-1/3 border-r h-full overflow-y-auto p-4 bg-white">
      <UserSearch />
      <h2 className="text-xl font-semibold mb-4">Chats</h2>
      {chats.map((chat) => {
        const chatPartner = chat.users.find((u) => u._id !== user._id);
        return (
          <div
            key={chat._id}
            onClick={() => dispatch(selectChat(chat))}
            className={`p-3 rounded mb-2 cursor-pointer hover:bg-gray-100 ${
              selectedChat?._id === chat._id ? 'bg-blue-100' : ''
            }`}
          >
            <p className="font-medium">{chat.isGroupChat ? chat.chatName : chatPartner.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;