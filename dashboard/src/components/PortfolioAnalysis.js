import React, { useState } from "react";
import { Box, Typography, Paper, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Mock portfolio data (You can replace this with actual API data later)
const mockPortfolio = [
  { stock: "AAPL", shares: 10, price: 180 },
  { stock: "TSLA", shares: 5, price: 2300 },
  { stock: "MSFT", shares: 8, price: 320 },
];

const PortfolioAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const navigate = useNavigate();

  const analyzePortfolio = async () => {
    setLoading(true);
    setTimeout(() => {
      setAnalysis({
        riskLevel: "Moderate",
        diversification: "Well Balanced",
        suggestions: ["Consider adding ETFs for stability", "Increase bonds allocation"],
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        p: 4,
        minHeight: "100vh",
        backgroundColor: "#121212", // Dark theme
        color: "#E0E0E0", // Light text
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 3,
          backgroundColor: "#1E1E1E", // Slightly lighter for contrast
          color: "#E0E0E0",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Portfolio Analysis
        </Typography>
        <Typography variant="body1">Analyze your stock portfolio using AI insights.</Typography>

        <Box sx={{ mt: 3 }}>
          {mockPortfolio.map((stock, index) => (
            <Paper
              key={index}
              sx={{
                p: 2,
                m: 1,
                backgroundColor: "#2C2C2C", // Darker card background
                color: "#E0E0E0",
              }}
            >
              <Typography variant="h6">{stock.stock}</Typography>
              <Typography>Shares: {stock.shares}</Typography>
              <Typography>Price: ${stock.price}</Typography>
            </Paper>
          ))}
        </Box>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#7C4DFF", // Violet button
            color: "#fff",
            "&:hover": { backgroundColor: "#651FFF" },
          }}
          onClick={analyzePortfolio}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Analyze Portfolio"}
        </Button>

        {analysis && (
          <Box sx={{ mt: 3, textAlign: "left" }}>
            <Typography variant="h6">AI Insights:</Typography>
            <Typography>📉 Risk Level: {analysis.riskLevel}</Typography>
            <Typography>📊 Diversification: {analysis.diversification}</Typography>
            <Typography>💡 Suggestions:</Typography>
            <ul>
              {analysis.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </Box>
        )}

        <Button
          sx={{
            mt: 2,
            color: "#7C4DFF", // Violet text
            "&:hover": { color: "#651FFF" },
          }}
          onClick={() => navigate("/ai-support")}
        >
          Back to AI Support
        </Button>
      </Paper>
    </Box>
  );
};

export default PortfolioAnalysis;
