import ReactMarkdown from "react-markdown";

export default function MessageBubble({ msg }) {
  const isUser = msg.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} p-1`}>
      <div
        className={`px-4 py-2 rounded-lg wrap-break-word max-w-[70%] 
          ${isUser ? "bg-indigo-600 text-white self-end" : "bg-gray-200 text-black self-start"} 
          `}
      >
        <ReactMarkdown>{msg.content}</ReactMarkdown>
      </div>
    </div>
  );
}
