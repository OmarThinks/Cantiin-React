import React from 'react';


class ProductCard extends React.Component {
    render() { 
        return <li className="productCard">
            <div className="productCard-productName">{this.props.name}</div>
        </li>;
    }
}
 
export default ProductCard;