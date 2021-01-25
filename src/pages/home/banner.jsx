import React from 'react';
import banner2 from '../../assets/images/banner2.jpg';

function Banner(){
    return <div>
        <section class="slider_section">
            <div id="main_slider" class="banner-main">         
                <div class="active">
                    <img class="first-slide" src={banner2} alt="First slide" />
                    <div class="container">
                        <div class="carousel-caption relative">
                            <h1>Our <br/> <strong class="black_bold">Latest </strong><br/><strong class="yellow_bold">Product </strong></h1>
                            <p>It is a long established fact that a r <br/>
                            eader will be distracted by the readable content of a page </p><a href="#">see more Products</a>
                        </div>
                    </div>
                </div>   
            </div>
        </section>
    </div>
}
export default Banner;