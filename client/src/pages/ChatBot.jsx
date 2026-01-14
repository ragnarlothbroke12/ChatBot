import { useState } from "react";
import api from "../services/api";

export default function ChatBot({ projectId }) {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

  const send = async () => {
    const res = await api.post(`/chat/${projectId}`, { message: msg });

    setMessages([
      ...messages,
      { role: "user", text: msg },
      { role: "bot", text: res.data.reply }
    ]);
    setMsg("");
  };

  return (
    <div>
      <h3>Chat</h3>

      {messages.map((m, i) => (
        <p key={i}>
          <b>{m.role}:</b> {m.text}
        </p>
      ))}

      <input value={msg} onChange={e => setMsg(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}
