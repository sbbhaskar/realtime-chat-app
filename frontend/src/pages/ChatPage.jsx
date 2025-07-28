import React from "react";

import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";
import Navbar from "../components/Navbar";

function ChatPage() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <ChatBox />
      </div>
    </div>
  );
}

export default ChatPage;