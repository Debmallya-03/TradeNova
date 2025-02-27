import React from 'react';

function Team() {
    return ( 
        <div className="container text-white"> {/* Ensuring white text */}
            <div className="row p-3 mt-5 border-top">
                <h1 className="text-center text-white">People</h1>
            </div>

            <div
                className="row p-3"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className="col-6 p-3 text-center">
                    <img
                        src="media/images/nithinKamath.jpg"
                        alt="Nithin Kamath"
                        style={{ 
                            borderRadius: "100%", 
                            width: "50%",
                            boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.6)" // Adding glow effect
                        }}
                    />
                    <h4 className="mt-5">Nithin Kamath</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col-6 p-3">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade-long stint as a trader. Today,
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on 
                        <a href="" style={{ color: "cyan", textDecoration: "none" }}> Homepage</a> / 
                        <a href="" style={{ color: "cyan", textDecoration: "none" }}> TradingQnA</a> / 
                        <a href="" style={{ color: "cyan", textDecoration: "none" }}> Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
