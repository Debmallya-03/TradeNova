import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5" style={{ color: "#fff", textAlign: "center" }}>
      <div className="mt-5 p-3">
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Technology</h1>
        <h3 className="mt-3 fs-4" style={{ color: "#bbb", fontWeight: "400" }}>
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-4 mb-5 fs-5">
          Check out our{" "}
          <a
            href=""
            style={{
              textDecoration: "none",
              color: "#0a84ff",
              fontWeight: "500",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.textShadow = "0px 0px 10px #0a84ff")}
            onMouseOut={(e) => (e.target.style.textShadow = "none")}
          >
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
