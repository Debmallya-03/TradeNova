import React, { useState } from "react";
import { Box, Button, Typography, CircularProgress, Paper } from "@mui/material";

const AIPredictions = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const cleanMarkdown = (text) => {
    return text
      .replace(/\*\*/g, "") // Remove bold (**text**)
      .replace(/\*/g, "") // Remove asterisks (*text*)
      .replace(/#/g, "") // Remove headers (# Heading)
      .replace(/\n-/g, "\n•") // Convert list items (- Item) to bullets (• Item)
      .replace(/\n\d+\./g, "\n•"); // Convert numbered lists (1. Item) to bullets (• Item)
  };

  const fetchAIPrediction = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" +
          process.env.REACT_APP_GEMINI_API_KEY,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text:
                      "Give me AI-powered stock market predictions for today. Format the response as bullet points so it's easy to read.",
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      let aiResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No prediction available.";
      aiResponse = cleanMarkdown(aiResponse); // Clean Markdown & format bullets
      setPrediction(aiResponse);
    } catch (error) {
      console.error("Error fetching AI predictions:", error);
      setPrediction("Failed to fetch predictions.");
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#121212", // Dark background
        padding: 3,
        color: "#E0E0E0",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "#1E1E1E", // Dark gray card
          color: "#E0E0E0", // Light gray text for readability
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "#7C4DFF" }}>
          Nova Stock Predictions 📈
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: "#ddd" }}>
          Click the button below to generate real-time AI predictions for the stock market.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7C4DFF", // Violet button
            color: "#fff",
            marginTop: 2,
            "&:hover": { backgroundColor: "#651FFF" },
          }}
          onClick={fetchAIPrediction}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Get AI Predictions"}
        </Button>

        {prediction && (
          <Typography
            variant="body1"
            sx={{
              marginTop: 3,
              padding: 2,
              backgroundColor: "#2C2C2C", // Slightly lighter dark shade for contrast
              color: "#E0E0E0",
              borderRadius: 2,
              textAlign: "left",
              whiteSpace: "pre-line",
            }}
          >
            {prediction}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default AIPredictions;
