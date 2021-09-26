import React, { Component } from 'react';




class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = { "product":props.item }
    }
    render() {
        let productCardClassName= "productCard productCardOutOfStock";
        let inStockText = "Out Of Stock"; 
        let inStockStyle = "productCard-productInStock productCard-productInStock-Out";
        if(this.state.product.in_stock){
            productCardClassName= "productCard productCardInStock";
            inStockText = "In Stock";
            inStockStyle = "productCard-productInStock productCard-productInStock-In";
        }
        return <li className="productCardContainer">
            <div className={productCardClassName}>
                <div className="productCard-productName">{this.state.product.name}</div>
                <div className={inStockStyle}>{inStockText}</div>
                <div className="productCard-productPrice">${this.state.product.price}</div>
            </div>
        </li>;
    }
}
 
export default ProductCard;

