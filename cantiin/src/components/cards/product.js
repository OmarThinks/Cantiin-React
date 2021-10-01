import React, { Component, useState } from 'react';


/*

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = { "product":props.item }
    }
    render() {
        let productCardClassName= "productCard productCardOutOfStock";
        let inStockText = "Out Of Stock"; 
        let inStockStyle = "productCard-Element productCard-productInStock productCard-productInStock-Out";
        if(this.state.product.in_stock){
            productCardClassName= "productCard productCardInStock";
            inStockText = "In Stock";
            inStockStyle = "productCard-Element productCard-productInStock productCard-productInStock-In";
        }
        return (<li className="productCardContainer">
            <div className={productCardClassName}>
                <div className="productCard-Element productCard-productName">{this.state.product.name}</div>
                <div className={inStockStyle}>{inStockText}</div>
                <div className="productCard-Element productCard-productPrice">${this.state.product.price}</div>
            </div>
        </li>);
    }
}
*/



const ProductCard = (props) => {
    const [state, setState] = useState({"product":props.item});
    let productCardClassName= "productCard productCardOutOfStock";
    let inStockText = "Out Of Stock"; 
    let inStockStyle = "productCard-Element productCard-productInStock productCard-productInStock-Out";
    if(state.product.in_stock){
        productCardClassName= "productCard productCardInStock";
        inStockText = "In Stock";
        inStockStyle = "productCard-Element productCard-productInStock productCard-productInStock-In";
    }
    return (
    <li className="productCardContainer">
        <div className={productCardClassName}>
            <div className="productCard-Element productCard-productName">{state.product.name}</div>
            <div className={inStockStyle}>{inStockText}</div>
            <div className="productCard-Element productCard-productPrice">${state.product.price}</div>
        </div>
    </li>);
}
 






export default ProductCard;

