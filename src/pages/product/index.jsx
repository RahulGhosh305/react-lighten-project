import React from 'react';
import { Helmet } from "react-helmet";


// Custom Component
import Topbar from '../sharedComponent/topbar.jsx';
import Navbar from '../sharedComponent/navbar.jsx';
import YellowBackgroundTitle from '../sharedComponent/yellow-bg-title.jsx';
import Footer from '../sharedComponent/footer.jsx';
import ProductContainer from '../product/productContainer';






class ProductPage extends React.Component {
    render() {
        return <div>
            <body class="main-layout product_page">
                <Helmet>
                    <title>Product</title>
                </Helmet>

                <header>
                    <div className="header">
                        {/* Topbar Component */}
                        <Topbar />
                        {/* Navbar Component */}
                        <Navbar />
                    </div>
                </header>
                {/* Yellow-Background-Title */}
                <YellowBackgroundTitle Title='Our Product' />

                {/* ProductContainer Conponent */}
                <ProductContainer />


                {/* Footer Component */}
                <Footer />
            </body>
        </div>
    }
}
export default ProductPage;