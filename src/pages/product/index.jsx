import React from 'react';
import { Helmet } from "react-helmet";


// Custom Component
import Topbar from '../sharedComponent/topbar.jsx';
import Navbar from '../sharedComponent/navbar.jsx';
import YellowBackgroundTitle from '../sharedComponent/yellow-bg-title.jsx';
import Footer from '../sharedComponent/footer.jsx';
import ProductPageCard from '../product/productCard.jsx';


// Assets
import product1 from '../../assets/icon/p1.png';
import product2 from '../../assets/icon/p2.png';
import product3 from '../../assets/icon/p3.png';
import product4 from '../../assets/icon/p4.png';
import product5 from '../../assets/icon/p5.png';
import product6 from '../../assets/icon/p6.png';
import product7 from '../../assets/icon/p7.png';



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

                {/* Our Product Start */}
                <div class="product">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="title">
                                    <span>We package the products with best services to make you a happy customer.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="product-bg">
                    <div class="product-bg-white">
                        <div className="container">
                            <div className="row">

                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <ProductPageCard img={product1} Title='Key Locker' price={25}/> 
                                </div>

                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <ProductPageCard img={product2} Title='Norton Internet Security' price={59}/> 
                                </div>

                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <ProductPageCard img={product3} Title='Money Bag' price={35}/> 
                                </div>

                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <ProductPageCard img={product4} Title='Multiplug' price={17}/> 
                                </div>

                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <ProductPageCard img={product5} Title='Leather Bag' price={29}/> 
                                </div>

                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <ProductPageCard img={product6} Title='Speaker' price={49}/> 
                                </div>

                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <ProductPageCard img={product7} Title='Cable' price={39}/> 
                                </div>

                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <ProductPageCard img={product3} Title='Men Bag' price={19}/> 
                                </div>

                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <ProductPageCard img={product6} Title='JK Speaker' price={45}/> 
                                </div>

                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <ProductPageCard img={product2} Title='Internet Security' price={15}/> 
                                </div>

                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <ProductPageCard img={product5} Title='Pk Money Bag' price={9}/> 
                                </div>

                                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <ProductPageCard img={product1} Title='Key Security' price={21}/> 
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>


                {/* Footer Component */}
                <Footer />
            </body>
        </div>
    }
}
export default ProductPage;