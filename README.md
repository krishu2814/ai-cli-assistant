# 🤖 AI CLI Assistant

A terminal-based AI assistant built with **LangChain** and **Groq LLM** that supports **real-time streaming**, **conversation memory**, and a clean interactive CLI experience.

This project was built to understand the fundamentals of production-ready LLM applications using LangChain.

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-22+-green?style=for-the-badge&logo=node.js)
![LangChain](https://img.shields.io/badge/LangChain-AI-blue?style=for-the-badge)
![Groq](https://img.shields.io/badge/Groq-LLM-orange?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)

## </p>

## ✨ Features

- 🚀 Real-time streaming responses
- 💬 Multi-turn conversation memory
- 🧠 System prompt for consistent AI behaviour
- 🎨 Beautiful CLI using Chalk
- ⏳ Loading spinner using Ora
- 🔐 Environment variables for API security
- ♻️ Singleton ChatGroq instance
- ❌ Graceful exit with `exit` command or `Ctrl + C`
- ⚠️ Proper error handling

---

## 🛠️ Tech Stack

- JavaScript (ES Modules)
- Node.js
- LangChain
- ChatGroq
- Chalk
- Ora
- Dotenv
- Readline

---

## 📁 Project Structure

```text
ai-cli-assistant/
│
├── src/
│   ├── index.js              # Application entry point
│   ├── llm.js                # Singleton ChatGroq instance
│   ├── cli.js                # Readline configuration
│   ├── banner.js             # CLI banner
│   ├── constants/
│   │      └── system-message.js
│   │
│   └── ...
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-cli-assistant.git
```

### 2. Move into the project

```bash
cd ai-cli-assistant
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
GROQ_API_KEY=your_groq_api_key
```

---

## ▶️ Run the project

```bash
npm start
```

---

## 💻 Example

```text
👤 You > Explain binary search

🤖 Assistant >

Binary Search is an efficient searching algorithm that works on sorted arrays...

```

Exit anytime using `exit` or `Ctrl + C`

---

## 📚 What I Learned

While building this project, I explored:

- LangChain Chat Models
- ChatGroq Integration
- Streaming LLM Responses
- Conversation Memory
- System Messages
- Environment Variable Management
- Singleton Design Pattern
- CLI Development with Readline
- Terminal UI using Chalk
- Loading Indicators with Ora
- Error Handling in Node.js

---

---

# 👨‍💻 Author

## Krishu Kumar

**Backend Engineer • GenAI Engineer • Agentic AI Enthusiast**

Passionate about building scalable backend systems, production-ready AI applications, and intelligent agentic workflows.

<p align="left">
  <a href="https://github.com/krishu2814" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-krishu2814-181717?style=for-the-badge&logo=github&logoColor=white"/>
  </a>

  <a href="https://www.linkedin.com/in/krishu-kumar-singh-77a640314/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Krishu%20Kumar-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>

  <a href="mailto:krishukumarsingh06@gmail.com">
    <img src="https://img.shields.io/badge/Email-krishukumarsingh06%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
</p>

---

<div align="center">

### ⭐ If you found this project helpful, please consider giving it a star!

**Happy Coding! 🚀**

</div>
