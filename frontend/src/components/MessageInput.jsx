import { useState } from 'react';
import React from 'react';
function MessageInput({ onSend }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSend(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t flex">
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        type="text"
        placeholder="Type a message..."
        className="flex-grow border rounded-l px-4 py-2"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded-r">Send</button>
    </form>
  );
}

export default MessageInput;