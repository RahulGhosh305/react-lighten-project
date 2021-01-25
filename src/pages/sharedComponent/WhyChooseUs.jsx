import React from 'react';

// Custom Component
import WhyChooseUsCard from '../sharedComponent/WhyChooseUsCard.jsx';

// Assets
import Icon1 from '../../assets/icon/1.png';
import Icon2 from '../../assets/icon/2.png';
import Icon3 from '../../assets/icon/3.png';
import Icon4 from '../../assets/icon/4.png';


class WhyChooseUs extends React.Component {
    render() {
        return <div>
            {/* Choose Start*/}
            <div class="whyschose">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 offset-md-3">
                            <div class="title">
                                <h2>Why <strong class="black">choose us</strong></h2>
                                <span>Fastest repair service with best price!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="choose_bg">
                <div class="container">
                    <div class="white_bg">
                        <div class="row">
                            <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                {/* Why Choose Us Card Component */}
                                <WhyChooseUsCard img={Icon1} Title='Data recovery' />
                            </dir>

                            <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                {/* Why Choose Us Card Component */}
                                <WhyChooseUsCard img={Icon2} Title='Computer repair' />
                            </dir>

                            <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                {/* Why Choose Us Card Component */}
                                <WhyChooseUsCard img={Icon3} Title='Mobile service' />
                            </dir>

                            <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                {/* Why Choose Us Card Component */}
                                <WhyChooseUsCard img={Icon4} Title='Network solutions' />
                            </dir>

                            <div class="col-md-12">
                                <a class="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default WhyChooseUs;