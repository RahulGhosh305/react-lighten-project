import React from 'react';



class ProductPageCard extends React.Component {
    render(props) {
        return <div>
            {/* Colume */}
                <div class="product-box">
                    <i><img src ={this.props.img} /></i>
                    <h3>{this.props.Title}</h3>
                    <span>${this.props.price}</span>
                </div>
            {/* Colume */}
        </div>
    }
}
export default ProductPageCard;