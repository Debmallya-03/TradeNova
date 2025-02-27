import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5" style={{ color: "#fff" }}>
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-6 p-5">
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>{productName}</h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
            {productDesription}
          </p>

          {/* Learn More Link */}
          <div className="mt-4">
            <a
              href={learnMore}
              style={{
                color: "#0a84ff",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.textShadow = "0px 0px 10px #0a84ff")}
              onMouseOut={(e) => (e.target.style.textShadow = "none")}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-6 text-center">
          <img
            src={imageURL}
            style={{
              width: "80%",
              borderRadius: "10px",
              transition: "all 0.4s ease-in-out",
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
            }}
            onMouseOver={(e) =>
              (e.target.style.boxShadow = "0 0 40px rgba(255, 255, 255, 0.8)")
            }
            onMouseOut={(e) =>
              (e.target.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.2)")
            }
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
