import React from 'react';

class Footer extends React.Component {
    render() {
        return <div>
            {/* footer */}
            <footer>
                <div className="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 offset-md-3">
                                <ul class="sociel">
                                    <li> <a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                    <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                                    <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="contact">
                                    <h3>conatct us</h3>
                                    <span>123 Second Street Fifth Avenue, <br />
                                            Manhattan, New York
                                            +987 654 3210
                                    </span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="contact">
                                    <h3>ADDITIONAL LINKS</h3>
                                    <ul class="lik">
                                        <li> <a href="#">About us</a></li>
                                        <li> <a href="#">Terms and conditions</a></li>
                                        <li> <a href="#">Privacy policy</a></li>
                                        <li> <a href="#">News</a></li>
                                        <li> <a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="contact">
                                    <h3>service</h3>
                                    <ul class="lik">
                                        <li> <a href="#"> Data recovery</a></li>
                                        <li> <a href="#">Computer repair</a></li>
                                        <li> <a href="#">Mobile service</a></li>
                                        <li> <a href="#">Network solutions</a></li>
                                        <li> <a href="#">Technical support</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="contact">
                                    <h3>IT NEXT THEME</h3>
                                    <span>Tincidunt elit magnis <br />
                                        nulla facilisis. Dolor <br />
                                        sagittis maecenas. <br />
                                        Sapien nunc amet <br />
                                        ultrices,
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="copyright">
                    <p>Copyright 2019 All Right Reserved By <a href="https://html.design/">Free html Templates</a></p>
                </div>
                </div>
            </footer>
        </div>
    }
}
export default Footer;