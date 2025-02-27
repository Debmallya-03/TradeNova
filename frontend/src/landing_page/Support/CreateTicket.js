import React from "react";

function CreateTicket() {
  return (
    <div className="container text-white py-5" style={{ backgroundColor: "#121212", minHeight: "100vh" }}>
      <h1 className="fs-2 text-center mb-4">Create a Support Ticket</h1>
      <p className="text-center mb-4 text-muted">
        Select a relevant topic to create a ticket and get assistance.
      </p>
      <div className="row justify-content-center">
        {[
          "Account Opening",
          "Trading & Investments",
          "Funds & Withdrawals",
          "Technical Support",
          "Charges & Fees",
          "General Queries",
        ].map((topic, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-white bg-dark shadow-lg border-0 p-3">
              <h4 className="mb-3">
                <i className="fa fa-plus-circle me-2" aria-hidden="true"></i> {topic}
              </h4>
              {[
                "Online Account Opening",
                "Offline Account Opening",
                "Company & Partnership Accounts",
                "NRI Account Opening",
                "Brokerage & Charges",
                "Getting Started",
              ].map((item, subIndex) => (
                <a
                  key={subIndex}
                  href="#"
                  className="d-block text-decoration-none text-muted my-1"
                  style={{ transition: "0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "white")}
                  onMouseLeave={(e) => (e.target.style.color = "gray")}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
