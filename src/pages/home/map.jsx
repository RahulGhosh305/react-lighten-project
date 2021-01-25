import React from 'react';

// Assets
import calll from '../../assets/icon/calll.png';
import mapimg from '../../assets/images/mapimg.jpg';



class Map extends React.Component {
    render() {
        return <div>
            <div class="container">
                <div class="yellow_bg">
                    <div class="row">
                        <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                            <div class="yellow-box">
                                <h3>REQUEST A FREE QUOTE<i><img src={calll} /></i></h3>

                                <p>Get answers and advice from people you want it from.</p>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                            <div class="yellow-box">
                                <a href="#">Get Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Map */}
            <div class="container-fluid padi">
                <div class="map">
                    <img src={mapimg} alt="img" />
                </div>
            </div>
        </div>
    }
}
export default Map;