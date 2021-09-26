import React, { Component } from 'react';




class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = { "product":props.item }
    }
    render() {
        let productCardClassName= "productCard productCardOutOfStock";
        let inStockText = "Out Of Stock"; 
        if(this.state.product.in_stock){
            productCardClassName= "productCard productCardInStock";
            inStockText = "In Stock"; 

        }
        return <li className={productCardClassName}>
            <div className="productCard-productName">{this.state.product.name}</div>
            <div className="productCard-productInStock">{inStockText}</div>
            <div className="productCard-productPrice">${this.state.product.price}</div>
        </li>;
    }
}
 
export default ProductCard;

