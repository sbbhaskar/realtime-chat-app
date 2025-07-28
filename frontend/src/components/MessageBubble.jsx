// File: src/components/MessageBubble.jsx
import React from 'react';
function MessageBubble({ message, isOwn }) {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`max-w-xs px-4 py-2 rounded-lg ${isOwn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
        <p>{message.content}</p>
      </div>
    </div>
  );
}

export default MessageBubble;