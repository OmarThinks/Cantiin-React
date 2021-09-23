import { Component } from 'react';
import { productsListFetcher } from '../../fetchers/products';
import {getItemsList, getAllResultsNumber,
    getCurrentWindowPage,getCurrentResponsePage,
    getApiResponsePage,getMaxPage} from "../../functions/fetching/list";



class ProductsList extends Component {
    state={
        "loaded":false,
        "items":[],
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
        "items":getItemsList(response),
        "rendered":<div>
        <h1>Products List:</h1>
        Loaded
        </div>,
        "allResultsNumber":getAllResultsNumber(response),
        "currentPage":getCurrentWindowPage(),
        "currentResponsePage":getCurrentResponsePage(response),
        "maxPage":getMaxPage(response),
        "nextPage":getApiResponsePage(response, true),
        "previousPage":getApiResponsePage(response, false)
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