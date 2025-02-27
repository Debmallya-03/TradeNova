import React from 'react';

function OpenAccount() {
    return ( 
        <div 
            className="container-fluid text-center py-5"
            style={{
                backgroundColor: "#000", 
                color: "#fff",
                minHeight: "50vh"
            }}
        >
            <h1 
                className="fw-bold"
                style={{
                    fontSize: "2.5rem",
                    textShadow: "2px 2px 10px rgba(255, 255, 255, 0.3)"
                }}
            >
                Open a TradeNova Account
            </h1>
            <p 
                className="mt-3"
                style={{
                    fontSize: "1.2rem",
                    opacity: 0.85, 
                    textShadow: "1px 1px 5px rgba(255, 255, 255, 0.2)"
                }}
            >
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </p>
            
            <button
                className="btn mt-4"
                style={{
                    backgroundColor: "#007bff", 
                    color: "#fff",
                    padding: "12px 30px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    borderRadius: "30px",
                    transition: "0.3s ease-in-out",
                    boxShadow: "0px 4px 15px rgba(0, 123, 255, 0.5)"
                }}
                onMouseOver={(e) => e.target.style.boxShadow = "0px 4px 20px rgba(0, 123, 255, 0.8)"}
                onMouseOut={(e) => e.target.style.boxShadow = "0px 4px 15px rgba(0, 123, 255, 0.5)"}
            >
                Sign up Now
            </button>
        </div>
    );
}

export default OpenAccount;
