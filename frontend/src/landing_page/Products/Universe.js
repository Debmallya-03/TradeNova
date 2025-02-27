import React from "react";

function Universe() {
  return (
    <div className="container mt-5 text-center" style={{ color: "#fff" }}>
      {/* Header Section */}
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)" }}>
        The TradeNova Universe
      </h1>
      <p style={{ fontSize: "1.2rem", opacity: "0.8", marginBottom: "40px" }}>
        Extend your trading and investment experience even further with our partner platforms
      </p>

      {/* Partner Platforms */}
      <div className="row">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-4 p-3">
            <img
              src="media/images/smallcaseLogo.png"
              style={{
                width: "80%",
                transition: "all 0.4s ease-in-out",
                filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.2))",
              }}
              onMouseOver={(e) =>
                (e.target.style.filter = "drop-shadow(0 0 30px rgba(255, 255, 255, 0.9))")
              }
              onMouseOut={(e) =>
                (e.target.style.filter = "drop-shadow(0 0 15px rgba(255, 255, 255, 0.2))")
              }
            />
            <p style={{ fontSize: "1rem", opacity: "0.9" }}>
              Thematic investment platform
            </p>
          </div>
        ))}
      </div>

      {/* Signup Button */}
      <button
        className="btn btn-primary mt-4"
        style={{
          width: "220px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          padding: "12px 20px",
          borderRadius: "8px",
          transition: "all 0.3s ease-in-out",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
        }}
        onMouseOver={(e) =>
          (e.target.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.8)")
        }
        onMouseOut={(e) =>
          (e.target.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.3)")
        }
      >
        Signup Now
      </button>
    </div>
  );
}

export default Universe;
