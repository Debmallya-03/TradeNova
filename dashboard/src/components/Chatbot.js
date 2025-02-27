import React, { useState } from "react";
import { Box, TextField, IconButton, Typography, Paper, AppBar, Toolbar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("Hello! I'm your AI assistant. How can I help you today?");

  const handleSendMessage = async () => {
    if (!query.trim()) return;

    try {
      const res = await fetch("http://localhost:3002/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      setResponse(data.answer || "No response from AI.");
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error connecting to AI.");
    }
  };

  return (
    <Box sx={{ backgroundColor: "#000", height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: "#111", padding: 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <ChatBubbleOutlineIcon sx={{ color: "#A855F7", fontSize: 30, mr: 1 }} />
          <Typography variant="h6" sx={{ color: "#A855F7", fontWeight: "bold" }}>NovaBot</Typography>
        </Toolbar>
      </AppBar>

      {/* Chat Section */}
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Paper elevation={3} sx={{ backgroundColor: "#222", color: "#FFF", padding: 2, borderRadius: 3, maxWidth: "80%" }}>
          {response}
        </Paper>
      </Box>

      {/* Input Section */}
      <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#111", padding: 2, borderTop: "1px solid #333" }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Ask me anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{ sx: { color: "#FFF", backgroundColor: "#222", borderRadius: "10px" } }}
        />
        <IconButton onClick={handleSendMessage} sx={{ color: "#A855F7", marginLeft: 1 }}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Chatbot;
