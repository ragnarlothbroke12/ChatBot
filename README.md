# 🤖 AI Chatbot Platform (MERN)

A minimal Chatbot Platform that allows users to create AI agents, attach prompts, and chat with them using an LLM (Groq API).

---

## 🚀 Features

- User Authentication (JWT)
- User Registration & Login
- Create AI Agents (Projects)
- Store System Prompts per Agent
- Persistent Chat History (MongoDB)
- AI-powered Chat (Groq LLM)
- Secure APIs with JWT Middleware
- Dashboard for managing agents & chats

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Groq SDK (LLM)

---

## 📂 Project Structure

```text
ChatBot/
│
├── api/
│   ├── controllers/     # Request handling logic
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── utils/           # Helpers & utilities
│   └── index.js         # Server entry point
│
├── client/
│   ├── src/
│   ├── pages/
│   ├── services/
│   └── App.jsx
│
└── README.md

```

---
## 🔐 Environment Variables

Create a `.env` file in the `main` folder:

```env
PORT=3000
MONGO_URI=my_mongodb_connection_string
JWT_SECRET=my_jwt_secret
GROQ_API_KEY=my_groq_api_key
```

---
## ▶️ How to Run the Application
### 1️⃣ Clone the Repository
git clone https://github.com/ragnarlothbroke12/chatbot-platform.git
cd chatbot

### 2️⃣ Start Backend
cd api
npm install
npm run dev

Backend will run at:
http://localhost:3000

### 3️⃣ Start Frontend
cd client
npm install
npm run dev

Frontend will run at:
http://localhost:5173

---
##🧪 Usage Flow

- Register a new user
- Login with email & password
- Create an AI Agent (Project)
- Add prompts to the agent
- Start chatting with the agent
- Chat history persists on refresh

---

## 🧠 LLM Integration

- Uses Groq LLM API
- Maintains context by sending last N messages
- Fallback response implemented for reliability

---
##📌 Notes
- JWT is stored in HTTP-only cookies
- APIs are protected using middleware
- Chat history is stored per user & agent

---
## 📽️ Demo
- Live demo: 

---
##👨‍💻 Author

Siyaram Sharma

MERN Stack Developer
