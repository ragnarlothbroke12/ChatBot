import { useState } from "react";
import ChatInput from "../components/Chat/ChatInput";
import ChatMessages from "../components/Chat/ChatMessages";
import { sendMessage } from "../api/chatApi";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const agentId = "696903294cc78afc9cbbc9c0"; // TEMP: MongoDB ObjectId

  const handleSend = async (text) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: text }]);

    try {
      const res = await sendMessage(agentId, text);

      // Last AI message
      const lastMsg = res.messages[res.messages.length - 1];

      // Convert markdown-like response to HTML (for bold, lists)
      const formattedContent = lastMsg.content
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // bold
        .replace(/^(#+) (.*)$/gm, (_, hashes, title) => `<h3>${title}</h3>`) // headings
        .replace(/^\d+\. (.*)$/gm, "<li>$1</li>") // ordered list items
        .replace(/<li>(.*?)<\/li>/g, "<ul><li>$1</li></ul>"); // wrap li in ul

      setMessages((prev) => [
        ...prev,
        { role: lastMsg.role, content: formattedContent },
      ]);
    } catch (err) {
      console.error("CHAT ERROR:", err);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <ChatMessages messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}
