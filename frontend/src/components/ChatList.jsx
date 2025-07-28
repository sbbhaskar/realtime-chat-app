import { useSelector } from "react-redux";

function ChatList({ chats, currentChat, setCurrentChat }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="overflow-auto max-h-[calc(100vh-180px)]">
      {chats.map((chat) => {
        const other = chat.users.find((u) => u._id !== user._id);
        return (
          <div
            key={chat._id}
            className={`p-3 border-b cursor-pointer hover:bg-gray-100 ${currentChat?._id === chat._id ? "bg-gray-200" : ""}`}
            onClick={() => setCurrentChat(chat)}
          >
            <div className="flex items-center gap-2">
              <span className="font-medium">{other.name}</span>
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block" title="Online"></span>
            </div>
            <p className="text-xs text-gray-500">{other.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ChatList;