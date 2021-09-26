import React, { Component } from 'react';




class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = { "product":props.item }
    }
    render() { 
        return <li className="productCard">
            <div className="productCard-productName">{this.state.product.name}</div>
        </li>;
    }
}
 
export default ProductCard;

