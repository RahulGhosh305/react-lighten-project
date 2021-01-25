import React from 'react';
import { Helmet } from 'react-helmet';


// Custom Component
import Topbar from '../sharedComponent/topbar.jsx';
import Navbar from '../sharedComponent/navbar.jsx'
import Banner from '../home/banner.jsx';
import WhyChooseUs from '../sharedComponent/WhyChooseUs.jsx';
import ServiceProces from '../sharedComponent/serviceProces.jsx';
import ProductContainer from '../product/productContainer.jsx';
import Map from '../sharedComponent/map.jsx';
import Footer from '../sharedComponent/footer.jsx';






class HomePage extends React.Component {
    render() {
        return <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <header>
                <div className='header'>
                    {/* Topbar Component */}
                    <Topbar />
                    {/* Navbar Component */}
                    <Navbar />
                </div>
            </header>

            {/* Banner Component */}
            <Banner />

            {/* WhyChooseUs Component */}
            <WhyChooseUs />

            {/* ServiceProces Component */}
            <ServiceProces />

            {/* ProductContainer Component */}
            <ProductContainer />

            {/* Map Component */}
            <Map />

            {/* Footer Component */}
            <Footer />
        </div>
    }
}
export default HomePage;