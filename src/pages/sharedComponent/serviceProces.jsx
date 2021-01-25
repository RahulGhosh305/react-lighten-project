import React from 'react';
import ServiceProcesBox from '../sharedComponent/serviceProcesBox.jsx';

// Assets
import Service1 from '../../assets/icon/service1.png';
import Service2 from '../../assets/icon/service2.png';
import Service3 from '../../assets/icon/service3.png';
import Service4 from '../../assets/icon/service4.png';
import Service5 from '../../assets/icon/service5.png';
import Service6 from '../../assets/icon/service6.png';

class ServiceProces extends React.Component {
    render() {
        return <div>
            {/* Service Start */}
            <div class="service">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <div class="title">
                                <h2>service <strong class="black">proces</strong></h2>
                                <span>Easy and effective way to get your device repaired.</span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            {/* ServiceProcesBox Component */}
                            <ServiceProcesBox img={Service1} Title='Fast service' />
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            {/* ServiceProcesBox Component */}
                            <ServiceProcesBox img={Service2} Title='Secure payments' />
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            {/* ServiceProcesBox Component */}
                            <ServiceProcesBox img={Service3} Title='Expert team' />
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            {/* ServiceProcesBox Component */}
                            <ServiceProcesBox img={Service4} Title='Affordable services' />
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            {/* ServiceProcesBox Component */}
                            <ServiceProcesBox img={Service5} Title='90 Days warranty' />
                        </div>

                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            {/* ServiceProcesBox Component */}
                            <ServiceProcesBox img={Service6} Title='Award winning' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default ServiceProces;