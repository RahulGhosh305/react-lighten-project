import React from 'react';
import { Helmet } from "react-helmet";


// Custom Component
import Topbar from '../sharedComponent/topbar.jsx';
import Navbar from '../sharedComponent/navbar.jsx';
import YellowBackgroundTitle from '../sharedComponent/yellow-bg-title.jsx';
import Footer from '../sharedComponent/footer.jsx';
import BlogPageCard from './blogCard.jsx';
import '../../style/css/bootstrap.min.css';

// Assets
import Img1 from '../../assets/images/1.jpg';
import Img2 from '../../assets/images/2.jpg';
import Img3 from '../../assets/images/3.jpg';




class BlogPage extends React.Component {
    render() {
        return <div>
            <body class="main-layout">
                <Helmet>
                    <title>Blog</title>
                </Helmet>

                {/* header */}
                <header>
                    <div className="header">
                        {/* Topbar Component */}
                        <Topbar />

                        {/* Navbar Component */}
                        <Navbar />
                    </div>
                </header>

                {/* Yellow-Background-Title */}
                <YellowBackgroundTitle Title='Blog' />

                {/* Blog Card Start*/}
                <div class="Lastestnews blog">
                    <div class="container">
                        <div className="row">
                            <div class="col-md-12">
                                <div class="titlepage">
                                    <span>It is a long established fact that a reader will be distracted by the readable <br />content of a page when looking at its layout. The point of using Lorem </span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
                                <BlogPageCard img={Img1} title='Live with Music' date='March 20' />
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
                                <BlogPageCard img={Img2} title='Love Music' date='March 18' />
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
                                <BlogPageCard img={Img3} title='Feel Music' date='February 02' />
                            </div>
                        </div>

                        <div className="row">
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
                                <BlogPageCard img={Img3} title='Stay Happy' date='Decembar 20' />
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
                                <BlogPageCard img={Img1} title='Say Something' date='January 15' />
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
                                <BlogPageCard img={Img2} title='Love Nature' date='April 05' />
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
export default BlogPage;