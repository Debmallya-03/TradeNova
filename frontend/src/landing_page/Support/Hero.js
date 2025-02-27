import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid text-white py-5"
      style={{
        backgroundColor: "#121212",
        minHeight: "60vh",
        textAlign: "center",
      }}
    >
      <div className="mb-4">
        <h2 className="fw-bold">Welcome to the Support Portal</h2>
        <p className="text-light">Search for answers or create a ticket to get help.</p>
        <a href="#" className="btn btn-primary mt-2 px-4 py-2 fw-bold">
          Track Tickets
        </a>
      </div>

      {/* Search Section */}
      <div className="row justify-content-center my-4">
        <div className="col-md-6">
          <h3 className="fs-4 mb-3 text-white">Find Your Answer</h3>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Eg. How do I activate F&O?"
              style={{ borderRadius: "8px 0 0 8px" }}
            />
            <button className="btn btn-primary" style={{ borderRadius: "0 8px 8px 0" }}>
              Search
            </button>
          </div>
          <div className="d-flex flex-wrap gap-3 mt-3">
            {["Track account opening", "Track segment activation", "Intraday margins", "Kite user manual"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-decoration-none text-white fw-bold"
                  style={{ transition: "0.3s" }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h3 className="fs-4 text-white">Featured Topics</h3>
          <ul className="list-unstyled mt-3">
            {[
              "Current Takeovers and Delisting - January 2024",
              "Latest Intraday leverages - MIS & CO",
            ].map((topic, index) => (
              <li key={index} className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-white fw-bold"
                >
                  {topic}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
