import React from 'react';

import PromoPage from '../PromoPage/PromoPage';
import LandingNav from '../LandingNav/LandingNav';
import About from '../About/About';
import Techs from '../Techs/Techs';
import Student from '../Student/Student';
import Footer from '../Footer/Footer';

export default function Landing() {
    return (
        <main className='main'>
            <PromoPage />
            <LandingNav />
            <About />
            <Techs />
            <Student />
            <Footer />
        </main>
    )
}