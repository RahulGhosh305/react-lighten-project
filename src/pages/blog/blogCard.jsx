import React from 'react';

// import Img1 from '../../assets/images/1.jpg';

class BlogPageCard extends React.Component {
    render(props) {
        return <div>
            {/* Colume */}
                <div class="news-box">
                    <figure><img src={this.props.img} alt="images/1.jpg" /></figure>
                    <h3>{this.props.title}</h3>
                    <span> {this.props.date} </span><span>Comment</span>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                </div>
            {/* Colume */}
        </div>
    }
}
export default BlogPageCard;