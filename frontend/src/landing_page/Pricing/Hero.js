import React from 'react';

function Hero() {
    return ( 
        <div className="container" style={{ backgroundColor: '#000', color: '#fff', padding: '50px 0' }}>
            <div className="row p-5 mt-5 border-bottom text-center">
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Pricing</h1>
                <h3 className="mt-3 fs-5" style={{ color: '#bbb' }}>
                    Free equity investments and flat ₹20 intraday & F&O trades
                </h3>
            </div>
            <div className="row p-5 mt-5 text-center">
                <div className="col-4 p-4">
                    <img 
                        src="media/images/pricingEquity.svg" 
                        style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))' }} 
                    />
                    <h1 className="fs-3 mt-3">Free Equity Delivery</h1>
                    <p style={{ color: '#ccc' }}>
                        All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
                    </p>
                </div>
                <div className="col-4 p-4">
                    <img 
                        src="media/images/intradayTrades.svg" 
                        style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))' }} 
                    />
                    <h1 className="fs-3 mt-3">Intraday & F&O Trades</h1>
                    <p style={{ color: '#ccc' }}>
                        Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
                    </p>
                </div>
                <div className="col-4 p-4">
                    <img 
                        src="media/images/pricingEquity.svg" 
                        style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))' }} 
                    />
                    <h1 className="fs-3 mt-3">Free Direct MF</h1>
                    <p style={{ color: '#ccc' }}>
                        All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
