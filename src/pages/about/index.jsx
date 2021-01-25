import React from 'react';
import { Helmet } from 'react-helmet';

// Custom Component
import Topbar from '../sharedComponent/topbar.jsx';
import Navbar from '../sharedComponent/navbar.jsx'
import YellowBackgroundTitle from '../sharedComponent/yellow-bg-title.jsx';
import Footer from '../sharedComponent/footer.jsx';
import WhoIsLighten from '../about/whoIsLighten.jsx';
import WhyChooseUs from '../sharedComponent/WhyChooseUs.jsx';
import ServiceProces from '../sharedComponent/serviceProces.jsx';




class AboutPage extends React.Component {
    render(){
        return <div>
            <Helmet>
                <title>About</title>
            </Helmet>

            <header>
                <div className='header'>
                    {/* Topbar Component */}
                    <Topbar />
                    {/* Navbar Component */}
                    <Navbar />
                </div>
            </header>


            {/* Yellow-Background-Title Component*/}
            <YellowBackgroundTitle Title='About'/>

            {/* Who Is Lighten */}
            <WhoIsLighten />

            {/* Why Choose Us Component */}
            <WhyChooseUs />

            {/* Service Procse */}
            <ServiceProces />

            {/* Footer Component */}
            <Footer />
        </div>
    }
}
export default AboutPage;