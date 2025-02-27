import React from 'react';

function Brokerage() {
    return ( 
        <div className="container" style={{ backgroundColor: "#000", color: "#fff", padding: "50px 0" }}>
            <div className="row text-center border-top">
                <div className="col-8 p-4">
                    <a href="" style={{ textDecoration: "none", color: "#0d6efd" }}>
                        <h3 className="fs-4">Brokerage Calculator</h3>
                    </a>
                    <ul style={{ textAlign: "left", lineHeight: "2", fontSize: "1rem", marginTop: "20px" }}>
                        <li>Call & Trade and RMS auto-square-off: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-4 p-4">
                    <a href="" style={{ textDecoration: "none", color: "#0d6efd" }}>
                        <h3 className="fs-4">List of Charges</h3>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
