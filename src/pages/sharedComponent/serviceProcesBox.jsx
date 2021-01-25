import React from 'react';



class ServiceProcesBox extends React.Component {
    render(props) {
        return <div>
            <div class="service-box">
                <i><img src={this.props.img} /></i>
                <h3>{this.props.Title}</h3>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
            </div>
        </div>
    }
}
export default ServiceProcesBox;