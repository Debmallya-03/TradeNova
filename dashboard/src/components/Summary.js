import React from "react";

const Summary = () => {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "#e0e0e0",
        minHeight: "100vh",
        padding: "20px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* User Greeting */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e1e1e, #292929)",
          padding: "15px",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ color: "#FFD700", margin: "0" }}>Hi, User! 👋</h2>
        <p style={{ fontSize: "14px", opacity: "0.8" }}>Welcome back to TradeNova</p>
      </div>

      {/* Equity Section */}
      <div
        style={{
          background: "#1e1e1e",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <h4 style={{ color: "#1E90FF", marginBottom: "10px" }}>Equity</h4>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ color: "#00FF7F" }}>₹3.74K</h3>
          <p style={{ fontSize: "14px", opacity: "0.8" }}>Margin Available</p>
        </div>

        <hr style={{ border: "1px solid #333" }} />

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
          <p>Margins Used: <span style={{ color: "#FFD700" }}>₹0</span></p>
          <p>Opening Balance: <span style={{ color: "#FFD700" }}>₹3.74K</span></p>
        </div>
      </div>

      {/* Holdings Section */}
      <div
        style={{
          background: "#1e1e1e",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <h4 style={{ color: "#FFD700", marginBottom: "10px" }}>Holdings (13)</h4>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ color: "#4caf50" }}>
            ₹1.55K <small style={{ fontSize: "14px", opacity: "0.8" }}>+5.20%</small>
          </h3>
          <p style={{ fontSize: "14px", opacity: "0.8" }}>P&L</p>
        </div>

        <hr style={{ border: "1px solid #333" }} />

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
          <p>Current Value: <span style={{ color: "#1E90FF" }}>₹31.43K</span></p>
          <p>Investment: <span style={{ color: "#FF4500" }}>₹29.88K</span></p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
