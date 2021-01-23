import React from "react";

// Assets
import Logo from '../../assets/images/logo.jpg';


class Navbar extends React.Component {
    render() {
        return <div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div class="full">
                            <div class="center-desk">
                                <div class="logo"> <a href="index.html"><img src={Logo} alt="logo" /></a> </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                        <div class="menu-area">
                            <div class="limit-box">
                                <nav class="main-menu">
                                    <ul class="menu-area-main">
                                        <li > <a href="index.html">Home</a> </li>
                                        <li> <a href="about.html">About</a> </li>
                                        <li> <a href="product.html">product</a> </li>
                                        <li> <a href="blog.html"> Blog</a> </li>
                                        <li class="active"> <a href="contact.html">Contact</a> </li>
                                        <li class="mean-last"> <a href="#contact">signup</a> </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                        <li><a class="buy" href="#">Login</a></li>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Navbar;