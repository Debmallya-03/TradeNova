import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';

import Navbar from '../Navbar';
import Footer from '../Footer';

function SupportPage() {
    return ( 
        <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
            <Hero />
            <CreateTicket />
        </div>
    );
}

export default SupportPage;
