import React from 'react';


class YellowBackgroundTitle extends React.Component {
    render(props){
        return <div>
            <div class="brand_color">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <h2>{this.props.Title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default YellowBackgroundTitle;