// File: src/components/ChatBox.jsx
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { useEffect, useRef } from 'react';
import { fetchMessages, sendMessage } from '../redux/messageSlice';
import socket from '../utils/socket';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';

function ChatBox() {
  const dispatch = useDispatch();
  const { selectedChat } = useSelector((state) => state.chat);
  const { messages } = useSelector((state) => state.message);
  const { user } = useSelector((state) => state.auth);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (selectedChat) {
      dispatch(fetchMessages(selectedChat._id));
      socket.emit('join chat', selectedChat._id);
    }
  }, [selectedChat, dispatch]);

  useEffect(() => {
    socket.on('message received', (newMessage) => {
      if (newMessage.chat._id === selectedChat?._id) {
        dispatch(fetchMessages(selectedChat._id));
      }
    });
  }, [selectedChat, dispatch]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (content) => {
    dispatch(sendMessage({ content, chatId: selectedChat._id }));
    socket.emit('new message', {
      sender: user,
      content,
      chat: selectedChat,
    });
  };

  if (!selectedChat) return <div className="w-2/3 h-full bg-white flex items-center justify-center text-gray-400">Select a chat to start messaging</div>;

  return (
    <div className="w-2/3 flex flex-col h-full">
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((msg) => (
          <MessageBubble key={msg._id} message={msg} isOwn={msg.sender._id === user._id} />
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
}

export default ChatBox;
