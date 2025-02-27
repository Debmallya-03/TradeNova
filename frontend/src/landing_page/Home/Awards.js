import React from 'react';

function Awards() {
    return ( 
        <div className="container mt-5" style={{ backgroundColor: "#F8F9FA", padding: "60px 0" }}>
            <div className="row align-items-center">
                {/* Left Section with Image */}
                <div className="col-lg-6 text-center">
                    <img src="media/images/comp4.jpg" alt="TradeNova Dashboard" style={{ maxWidth: "85%" }} />
                </div>
                
                {/* Right Section with Text */}
                <div className="col-lg-6 text-lg-start text-center">
                    <h1 className="fw-bold" style={{ fontSize: "2.5rem", color: "#000" }}>
                        Powering the Future of Trading
                    </h1>
                    <p className="text-muted mt-3" style={{ fontSize: "1.1rem" }}>
                        Revolutionize your trading journey with TradeNova’s innovative solutions.
                    </p>
                    
                    {/* Join Now Button */}
                    <button className="btn btn-outline-dark mt-4 px-4 py-2 fw-bold" style={{ fontSize: "1.1rem" }}>
                        Join Now
                    </button>
                </div>
            </div>
        </div>
     );
}

export default Awards;
