import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function Hero() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleSignUp = () => {
    navigate("/signup"); // Redirect to the SignUp page
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100vh",
        backgroundColor: "#000", // Black background
        color: "#fff", // White text
        padding: "50px",
      }}
    >
      {/* Left Section: Text Content */}
      <div style={{ flex: 1, maxWidth: "50%" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
          Discover the Future of
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.5", marginBottom: "20px" }}>
          TradeNova is a next-generation AI-powered trading and investment platform that goes
          beyond traditional stock brokers like Zerodha.
        </p>

        {/* AI Features */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}>
          <div
            style={{
              backgroundColor: "#222",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
            }}
          >
            <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "5px" }}>The Power of AI</p>
            <h3 style={{ margin: "0" }}>Unparalleled Insights</h3>
            <p style={{ color: "#bbb", fontSize: "0.9rem", marginTop: "10px" }}>Trade with Confidence</p>
          </div>

          <div
            style={{
              backgroundColor: "#222",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
            }}
          >
            <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "5px" }}>Revolutionize Your</p>
            <h3 style={{ margin: "0" }}>Unlock Your</h3>
            <button
              className="btn btn-light"
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "8px",
                marginTop: "10px",
                padding: "10px 20px",
                textTransform: "none",
                cursor: "pointer",
              }}
              onClick={handleSignUp} // Call function on click
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      {/* Right Section: Robot Image */}
      <div style={{ flex: 1, textAlign: "right" }}>
        <img
          src="media/images/robo.jpg"
          alt="AI Robot"
          style={{ width: "90%", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}

export default Hero;
