import React from "react";
import { Button, Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AISupport = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#121212",
        padding: 2,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          borderRadius: "20px", // Fully rounded corners
          textAlign: "center",
          backgroundColor: "#1e1e1e",
          color: "#fff",
          width: "90%",
          maxWidth: "600px",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          AI Support
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to AI Support. How can I assist you today?
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            mt: 3,
          }}
        >
          {[
            { text: "Stock Market Insights", route: "/stock-insights" },
            { text: "AI-Powered Predictions", route: "/ai-predictions" },
            { text: "Portfolio Analysis", route: "/portfolio-analysis" },
            { text: "Chat with Nova", route: "/chat-ai" },
          ].map((btn, index) => (
            <Button
              key={index}
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                padding: "10px 20px",
                fontSize: "1rem",
                borderRadius: "8px",
                textTransform: "none",
                transition: "all 0.3s ease-in-out",
                boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.3)", // Glow effect
                "&:hover": {
                  backgroundColor: "#000",
                  color: "#fff",
                  boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.7)",
                },
              }}
              onClick={() => navigate(btn.route)}
            >
              {btn.text}
            </Button>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default AISupport;
