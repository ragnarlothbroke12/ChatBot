import { useState } from "react";
import ChatBot from "./ChatBot";

export default function ChatPage() {
  const [projectId] = useState("YOUR_PROJECT_ID");

  return <ChatBot projectId={projectId} />;
}
