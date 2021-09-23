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
        "allResultsNumber":null,
        "currentPage":null,
        "maxPage":null,
        "nextPage":null,
        "previousPage":null
    }


    /*Helpers */

    handleSucessfulResponse(response)
    {
        console.log(response);
        
        let products = response.data.results;
        let allResultsNumber = response.data.count;
        this.setState(
    {
        "loaded":true,
        "products":products,
        "rendered":<div>
        <h1>Products List:</h1>
        Loaded
        </div>,
        "allResultsNumber":allResultsNumber,
        "currentPage":1,
        "maxPage":null,
        "nextPage":null,
        "previousPage":null
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