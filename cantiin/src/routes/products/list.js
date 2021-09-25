import { Component } from 'react';
import { productsListFetcher } from '../../fetchers/products';
import {getItemsList, getAllResultsNumber,
    getCurrentWindowPage,getCurrentResponsePage,
    getApiResponsePage,getMaxPage} from "../../functions/fetching/list";
import Pagination from '../../components/pagination';


class ProductsList extends Component {
    state={
        "loaded":false,
        "items":[],
        "response":null
    }


    /*Helpers */

    handleSucessfulResponse(response)
    {
        console.log(response);
        
        this.setState(
        {
            "loaded":true,
            "items":getItemsList(response),
            "response": response
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

        if (!this.state.loaded)
        {return <div>
            <h1>Products List:</h1>
            <div>Loading...</div>
        </div>;}



        return <div>
        <h1>Products List:</h1>
        <Pagination response={this.state.response}/>
        Loaded
        </div>;
    }
}
 
export default ProductsList;