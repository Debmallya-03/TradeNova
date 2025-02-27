import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from "../OpenAccount";

function PricingPage() {
    return ( 
        <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
           <Hero />
           <OpenAccount />
           <Brokerage />
        </div>
    );
}

export default PricingPage;
