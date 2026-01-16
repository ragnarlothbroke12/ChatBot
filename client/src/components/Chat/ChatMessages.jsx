import React, { useEffect, useRef } from "react";

export default function ChatMessages({ messages }) {
  const messagesEndRef = useRef(null);

  // Scroll to bottom when new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-100">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`max-w-[70%] break-words px-4 py-3 rounded-xl whitespace-pre-wrap shadow-sm
            ${
              msg.role === "user"
                ? "bg-indigo-600 text-white self-end"
                : "bg-gray-200 text-gray-900 self-start"
            }`}
        >
          {msg.role === "assistant" ? (
            <div
              className="prose prose-sm"
              dangerouslySetInnerHTML={{ __html: msg.content }}
            />
          ) : (
            msg.content
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
