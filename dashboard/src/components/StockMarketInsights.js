import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Paper, CircularProgress, List, ListItem, ListItemText } from "@mui/material";

const StockMarketInsights = () => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await axios.get(
          `https://finnhub.io/api/v1/news?category=general&token=cuumi61r01qk88s9oeagcuumi61r01qk88s9oeb0`
        );
        setInsights(response.data.slice(0, 5)); // Get top 5 insights
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stock insights:", error);
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", padding: 2, backgroundColor: "#121212" }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 3, textAlign: "center", backgroundColor: "#1E1E1E", width: "80%", color: "#E0E0E0" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "#7C4DFF" }}>
          Stock Market Insights
        </Typography>
        <Typography variant="body1" gutterBottom>
          Here you can analyze stock trends, get real-time data, and AI-powered predictions.
        </Typography>

        {loading ? (
          <CircularProgress sx={{ color: "#7C4DFF" }} />
        ) : (
          <List>
            {insights.map((item, index) => (
              <ListItem key={index} divider sx={{ "&:hover": { backgroundColor: "#2C2C2C" } }}>
                <ListItemText 
                  primary={<Typography sx={{ color: "#7C4DFF", fontWeight: "bold" }}>{item.headline}</Typography>} 
                  secondary={<Typography sx={{ color: "#E0E0E0" }}>{item.summary}</Typography>} 
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
};

export default StockMarketInsights;
