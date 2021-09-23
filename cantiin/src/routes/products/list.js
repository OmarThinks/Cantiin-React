import { Component } from 'react';
import { productsListFetcher } from '../../fetchers/products';
const axios = require('axios');


class ProductsList extends Component {
    state={
        "loaded":false,
        "products":[],
        "rendered":<div>
            <h1>Products List:</h1>
            <p>Loading...</p>
        </div>,
        "currentPage":null,
        "maxPage":null,
        "nextPage":null,
        "previousPage":null
    }


    /*Helpers */

    handleSucessfulResponse(response)
    {
        console.log(response);
        this.setState(
    {
        "loaded":true,
        "products":response.data.results,
        "currentPage":1,
        "rendered":<div>
        <h1>Products List:</h1>
        <p>Loaded</p>
    </div>,
 });
    }

    /*Life Cycle*/
    componentDidMount()
    {
        productsListFetcher()
        .then((response)=>{this.handleSucessfulResponse(response);})
        .catch((err)=>{console.log(err);})
    }





    render() { 
        return this.state.rendered;
    }
}
 
export default ProductsList;