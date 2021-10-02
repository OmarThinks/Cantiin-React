import { Component, Fragment, useState, useEffect } from 'react';
import {getItemsList, getAllResultsNumber,
    getCurrentWindowPage,getCurrentResponsePage,
    getApiResponsePage,getMaxPage} from "../../functions/fetching/list";
import Pagination from '../../components/pagination';
import ProductCard from '../../components/cards/product';


import fetchers from '../../helpers/fetchers';

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
        fetchers.products.list(getCurrentWindowPage())
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
