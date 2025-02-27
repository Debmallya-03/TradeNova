import React from 'react';

import Hero from './Hero';
import Team from './Team';

function AboutPage() {
    return ( 
        <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
           
           <Hero />
           <Team />
           
        </div>
    );
}

export default AboutPage;
