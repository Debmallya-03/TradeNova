# TradeNova: AI-Powered Trading Assistant
TradeNova is a cutting-edge fintech platform designed to revolutionize financial trading. It leverages AI to provide real-time market insights, automated trading assistance, and intelligent analytics for traders of all levels.

## 🚀 Features
- **AI-Powered Trading Insights**: Get real-time stock market trends and recommendations.
- **Secure Authentication**: Integrated with jwt authentication.
- **Intelligent Dashboard**: Displays stock data, analytics, and personalized reports.

## 🛠 Tech Stack
### **Frontend**:
- React.js 
- Material UI (MUI)
- Bootstrap

### **Backend**:
- Node.js (Express.js)
- OpenAI API (for AI-powered chatbot)
- Database MongoDB

### **Deployment**:
- Frontend: Netlify
- Backend: Render / Vercel (TBD)

## 📂 Project Structure
```
/tradenova
│── /app                 # React.js app directory
│── /components          # UI Components
│── /pages               # React.js page routes
│── /styles              # Global styles (Bootstrap, MUI)
│── /utils               # Helper functions
│── chatbot.js           # Gemini 1.5 Flash Chatbot integration
│── dashboard.js         # Dashboard logic & rendering
│── package.json         # Project dependencies
```

## 🚀 Getting Started
### **Prerequisites**
Ensure you have the following installed:
- React.js 
- npm or yarn
- OpenAI API Key
- Gemini 1.5 Flash API key
- Finnhub Api key

### **Installation**
```sh
git clone https://github.com/debmallya/tradenova.git
cd tradenova
npm install  # or yarn install
```

### **Environment Variables**
Create a `.env.local` file and add:
```
NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-api>

OPENAI_API_KEY=<your-openai-api>
```

### **Run the App**
```sh
npm run dev  # or yarn dev
```
The app will be available at [https://67c11dc5bb6b8c83f9d4092e--legendary-selkie-48eeca.netlify.app/](https://67c11dc5bb6b8c83f9d4092e--legendary-selkie-48eeca.netlify.app/)
[[https://67c11dc5bb6b8c83f9d4092e--legendary-selkie-48eeca.netlify.app/](https://67c11f66d9582383846f1d9c--soft-valkyrie-86f7df.netlify.app/)]

## 📌 Usage
- Sign up or log for jwt authentication
- Access the AI chatbot for market insights.
- Explore stock trends, analytics, and reports on the dashboard.

## 📜 License
This project is open-source and available under the MIT License.

## 🌟 Contributing
We welcome contributions! Feel free to open issues or submit pull requests.

## 📬 Contact
For queries, reach out via **Email** or connect on **LinkedIn**.

⭐ **Star this repo if you find it useful!**

