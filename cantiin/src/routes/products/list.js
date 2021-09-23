import { Component } from 'react';
import { productsListFetcher } from '../../fetchers/products';
const axios = require('axios');


class ProductsList extends Component {
    state={
        loaded:false,
        products:[],
        rendered:<div>
            <h1>Products List:</h1>
            <p>Loading...</p>
        </div>
    }

    componentDidMount()
    {
        productsListFetcher()
        .then((res)=>{console.log(res);})
        .catch((err)=>{console.log(err);})
    }

    render() { 
        return this.state.rendered;
    }
}
 
export default ProductsList;