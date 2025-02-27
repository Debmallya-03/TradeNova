import React from "react";

function Footer() {
    return (
        <footer 
            className="py-5"
            style={{
                backgroundColor: "#000000", 
                color: "#F8F9FA", 
                textAlign: "center"
            }}
        >
            <div className="container">
                <div className="row">
                    {/* Logo Section */}
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <img 
                            src="media/images/logoo.jpg" 
                            alt="TradeNova Logo" 
                            style={{ 
                                width: "80px", 
                                height: "80px", 
                                objectFit: "contain", 
                                filter: "brightness(1.2)"
                            }}
                        />
                        <p className="mt-2" style={{ fontSize: "14px", opacity: "0.8" }}>
                            © 2025 TradeNova, Inc. <br />
                            All rights reserved.
                        </p>
                    </div>

                    {/* Resources Section */}
                    <div className="col-md-2">
                        <h6 className="text-white">Resources</h6>
                        {["Learn", "Insights", "Support", "Community"].map((item) => (
                            <p key={item}>
                                <a 
                                    href="#" 
                                    className="text-muted text-decoration-none"
                                    style={{ transition: "color 0.3s" }}
                                    onMouseOver={(e) => e.target.style.color = "#FFFFFF"}
                                    onMouseOut={(e) => e.target.style.color = "#CFCFCF"}
                                >
                                    {item}
                                </a>
                            </p>
                        ))}
                    </div>

                    {/* Company Section */}
                    <div className="col-md-2">
                        <h6 className="text-white">Company</h6>
                        {["About Us", "Careers", "Partners", "Contact"].map((item) => (
                            <p key={item}>
                                <a 
                                    href="#" 
                                    className="text-muted text-decoration-none"
                                    style={{ transition: "color 0.3s" }}
                                    onMouseOver={(e) => e.target.style.color = "#FFFFFF"}
                                    onMouseOut={(e) => e.target.style.color = "#CFCFCF"}
                                >
                                    {item}
                                </a>
                            </p>
                        ))}
                    </div>

                    {/* Connect Section */}
                    <div className="col-md-2">
                        <h6 className="text-white">Connect</h6>
                        {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((item) => (
                            <p key={item}>
                                <a 
                                    href="#" 
                                    className="text-muted text-decoration-none"
                                    style={{ transition: "color 0.3s" }}
                                    onMouseOver={(e) => e.target.style.color = "#FFFFFF"}
                                    onMouseOut={(e) => e.target.style.color = "#CFCFCF"}
                                >
                                    {item}
                                </a>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
