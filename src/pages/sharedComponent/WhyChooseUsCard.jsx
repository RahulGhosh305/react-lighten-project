import React from 'react';





class WhyChooseUsCard extends React.Component {
    render(props) {
        return <div>
            <div class="for_box">
                <i><img src={this.props.img} /></i>
                <h3>{this.props.Title}</h3>
                <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
            </div>
        </div>
    }
}
export default WhyChooseUsCard;