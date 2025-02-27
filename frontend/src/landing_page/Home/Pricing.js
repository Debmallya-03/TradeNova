import React from "react";

function Hero() {
  return (
    <div 
      className="container-fluid d-flex align-items-center justify-content-center text-white"
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "3rem 0",
      }}
    >
      <div className="row align-items-center w-100">
        {/* Left Side - AI Image */}
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src="media/images/mann.jpg"
            alt="AI Trading"
            className="img-fluid"
            style={{ maxWidth: "90%", borderRadius: "10px" }}
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="col-md-6 px-5">
          <h1 
            className="fw-bold" 
            style={{
              fontSize: "3rem", 
              fontFamily: "'Poppins', sans-serif",
              textShadow: "2px 2px 10px rgba(255, 255, 255, 0.5)"
            }}
          >
            Invest with Confidence
          </h1>
          <p 
            className="text-light" 
            style={{
              fontSize: "1.2rem",
              opacity: 0.9, // Increase visibility
              textShadow: "1px 1px 5px rgba(255, 255, 255, 0.3)"
            }}
          >
            Embrace the future of investing with TradeNova's innovative platform.
            Harness the power of AI and connect with a vibrant trading community.
          </p>
          <button 
            className="btn btn-light px-4 py-2 mt-3"
            style={{
              borderRadius: "25px",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
