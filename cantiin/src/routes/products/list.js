import { Component } from 'react';
import { productsListFetcher } from '../../fetchers/products';
import {getItemsList, getAllResultsNumber,
    getCurrentWindowPage,getCurrentResponsePage,
    getResponseNextPage} from "../../functions/fetching/list";



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
        "currentResponsePage":null,
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
        "products":getItemsList(response),
        "rendered":<div>
        <h1>Products List:</h1>
        Loaded
        </div>,
        "allResultsNumber":getAllResultsNumber(response),
        "currentPage":getCurrentWindowPage(),
        "currentResponsePage":getCurrentResponsePage(response),
        "maxPage":null,
        "nextPage":getResponseNextPage(response),
        "previousPage":null
 });
 console.log(this.state);
    }

    /*Life Cycle*/
    componentDidMount()
    {
        productsListFetcher(getCurrentWindowPage())
        .then((response)=>{this.handleSucessfulResponse(response);})
        .catch((err)=>{console.log(err);})
    }





    render() { 
        return this.state.rendered;
    }
}
 
export default ProductsList;