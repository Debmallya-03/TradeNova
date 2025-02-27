import React from "react";

function Stats() {
  return (
    <div className="container-fluid" style={{ paddingTop: "4rem" }}>
      <div className="row align-items-center">
        {/* Left Side - White Background */}
        <div className="col-md-6 px-5">
          <h5 className="text-muted mb-2">Intelligent Investing</h5>
          <h1 className="fw-bold" style={{ fontSize: "3rem" }}>Elevate Your Trades</h1>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Discover the future of trading with TradeNova's AI-powered platform. 
            Unlock unparalleled insights & access social trading features.
          </p>
          <button className="btn btn-dark px-4 py-2 mt-3">Start Investing</button>
        </div>

        {/* Right Side - Black Background (Blending Effect) */}
        <div 
          className="col-md-6 d-flex justify-content-center align-items-center"
          style={{
            background: "linear-gradient(to left, #000 50%, #fff 50%)", // Creates smooth blending
            minHeight: "100vh",
            display: "flex",
          }}
        >
          <img
            src="media/images/comp5.jpg"
            alt="TradeNova Dashboard"
            className="img-fluid"
            style={{ maxWidth: "90%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;
