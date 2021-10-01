import { Component, Fragment, useState, useEffect } from 'react';
import { productsListFetcher } from '../../fetchers/products';
import {getItemsList, getAllResultsNumber,
    getCurrentWindowPage,getCurrentResponsePage,
    getApiResponsePage,getMaxPage} from "../../functions/fetching/list";
import Pagination from '../../components/pagination';
import ProductCard from '../../components/cards/product';



/*
class ProductsList extends Component {
    state={
        "loaded":false,
        "items":[],
        "response":null,
        "success":false,
        "err":null
    }


    /*Helpers */  /*

    handleSucessfulResponse(response)
    {
        console.log(response);
        
        this.setState(
        {
            "loaded":true,
            "items":getItemsList(response),
            "response": response,
            "success":true,
            "err":null
        });
        console.log(this.state);
    }

    handleFailingResponse(err)
    {
        //"config", "request", "response", "isAxiosError", "toJSON"
        /*console.log(err);
        console.log(err.config);
        console.log(err.response);
        console.log(err.isAxiosError);
        console.log(err.toJSON());
        console.log(Object.keys(err));*/  /*
        this.setState({
            "loaded":true,
            "items":[],
            "response":null,
            "success":false,
            "err":err
        }
        );
    }


    /*Life Cycle*/  /*
    componentDidMount()
    {
        productsListFetcher(getCurrentWindowPage())
        .then((response)=>{this.handleSucessfulResponse(response);})
        .catch((err)=>{this.handleFailingResponse(err);})
    }





    render() { 

        if (!this.state.loaded)
        {

            return <div>
            <h1>Products List:</h1>
            <div>Loading...</div>
        </div>;}
        if(this.state.success)
        {let productsList = this.state.items.map(product=>{return(
            <Fragment>
                <ProductCard item={product}/>
            </Fragment>
        );});
        return <div>
        <h1>Products List:</h1>
        <Pagination response={this.state.response}/>
        <ul className="ProductsList">
            {productsList}
        </ul>
        </div>;}
        return <div>
        <h1>Products List:</h1>
            <div>{this.state.err.response.data.detail}</div>
            </div>;
    }
}
*/


const ProductsList = () => {
    const [state,setState] = useState({
        "loaded":false,
        "items":[],
        "response":null,
        "success":false,
        "err":null
    });

    const handleSucessfulResponse = (response) =>
    {
        console.log(response);
        
        setState(
        {
            ...state,
            "loaded":true,
            "items":getItemsList(response),
            "response": response,
            "success":true,
            "err":null
        });
        //console.log(state);
    }
    
    const handleFailingResponse = (err) =>
    {
        //"config", "request", "response", "isAxiosError", "toJSON"
        /*console.log(err);
        console.log(err.config);
        console.log(err.response);
        console.log(err.isAxiosError);
        console.log(err.toJSON());
        console.log(Object.keys(err));*/
        setState({
            ...state,
            "loaded":true,
            "items":[],
            "response":null,
            "success":false,
            "err":err
        }
        );
    }



    useEffect(()=>{
        productsListFetcher(getCurrentWindowPage())
        .then((response)=>{handleSucessfulResponse(response);})
        .catch((err)=>{handleFailingResponse(err);})        
    },[state]);
    
    
    if (!state.loaded)
    {

        return (
            <div>
                <h1>Products List:</h1>
                <div>Loading...</div>
            </div>
        );
    }
    
    if(state.success)
    {
        let productsList = state.items.map(product=>{return(
        <Fragment>
            <ProductCard item={product}/>
        </Fragment>);}
        );
    
        return (
            <div>
            <h1>Products List:</h1>
            <Pagination response={state.response}/>
            <ul className="ProductsList">
                {productsList}
            </ul>
            </div>
        );
    }

    return (
        <div>
            <h1>Products List:</h1>
            <div>{state.err.response.data.detail}</div>
        </div>
    );
}
 
export default ProductsList;
