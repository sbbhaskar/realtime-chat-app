# 💬 Real-Time Chat App (MERN + Socket.IO)

A full-stack real-time chat application built with the MERN stack and Socket.IO. It allows users to register, log in, and chat with others in real time. This project demonstrates full-stack development, real-time communication, authentication, and frontend UI design with TailwindCSS.

---

## 🚀 Live Demo

> **Frontend:** [https://your-vercel-link.vercel.app/](https://your-vercel-link.vercel.app/)
> **Backend API:** [https://your-render-link.onrender.com/](https://your-render-link.onrender.com/)

---

## 🧩 Features

* 🔐 User Authentication (JWT based)
* 📝 Register & Login functionality
* 🗣️ Real-time messaging with Socket.IO
* 🧍 View other registered users & initiate chat
* 🔎 Search users to start new conversation
* ✅ Chat history with MongoDB storage
* 👁️ Online user status
* 👤 User profile view
* 🔓 Logout functionality
* 📱 Responsive UI with TailwindCSS + Vite

---

## 🛠️ Tech Stack

**Frontend:**

* React.js (Vite)
* Redux Toolkit
* React Router DOM
* Tailwind CSS
* Socket.IO Client

**Backend:**

* Node.js + Express.js
* MongoDB + Mongoose
* JWT Authentication
* Socket.IO Server
* dotenv, bcryptjs, cors, express-async-handler

---

## 📦 Folder Structure

```
realtime-chat-app/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

---

## 🧪 How to Run Locally

### 🔧 Backend Setup

```bash
cd backend
npm install
npm run dev
```

> Make sure `.env` file contains your Mongo URI and JWT\_SECRET

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🙋‍♂️ Author

**Bhaskar Banerjee**
Full Stack Developer (MERN) | Passionate about building real-world web apps
📫 Connect on [LinkedIn](https://www.linkedin.com/in/your-profile)

---

## 📄 License

MIT

---

> "Built with ❤️, powered by Mongo, Express, React, Node, and guided by Guruji"
