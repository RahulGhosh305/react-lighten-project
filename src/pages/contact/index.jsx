import React from "react";
import { Helmet } from "react-helmet";

// Custom Component
import Topbar from '../sharedComponent/topbar.jsx';
import Navbar from '../sharedComponent/navbar.jsx';
import YellowBackgroundTitle from '../sharedComponent/yellow-bg-title.jsx';
import Footer from '../sharedComponent/footer.jsx';




class ContactUsPage extends React.Component {
    render() {
        return (
            <div>
                <body class="main-layout">
                    <Helmet>
                        <title>Contact Us</title>
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

                    {/* Yellow-Background-Title Component */}
                    <YellowBackgroundTitle Title='Contact Us' />

                    {/* contact form part start*/}
                    <div class="contact">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">

                                    <form class="main_form">
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <input class="form-control" placeholder="Your name" type="text" name="Your Name" />
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <input class="form-control" placeholder="Email" type="text" name="Email" />
                                            </div>
                                            <div class=" col-md-12">
                                                <input class="form-control" placeholder="Phone" type="text" name="Phone" />
                                            </div>
                                            <div class="col-md-12">
                                                <textarea class="textarea" placeholder="Message"></textarea>
                                            </div>
                                            <div class=" col-md-12">
                                                <button class="send">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Component */}
                    <Footer />
                </body>
            </div>
        );
    }
}
export default ContactUsPage;
