import React, { Component, Fragment } from 'react';

import {buildUrl, getPureUrl, getUrlQueryParameters,getUrlSpecificQueryPramater,
    getUrlPage} from "../functions/urls";
import {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage,
        getApiResponsePage,getMaxPage} from '../functions/fetching/list';

import {getCurrentPagePaginationButton,getPrevPagePaginationButton,
    getFirstPagePaginationButton,getNextPagePaginationButton,
    getLastPagePaginationButton, getPrevPagesPaginationButtons, getNextPagesPaginationButtons} from '../functions/pagination';




class Pagination extends Component {
    constructor(props) {
        //console.log("This is props");
        super(props);
        let response = props.response;
        this.state = 
    { 
        "response":response,
        "currentUrl":window.location.href,
        "maxPageNumber":getMaxPage(response),
    };
    }
    render() {
        //console.log(`State is:`);
        //console.log( this.state);
        return <Fragment>
        <ul className="pagination"> 
            {getFirstPagePaginationButton(this.state.currentUrl)}
            {getPrevPagePaginationButton(this.state.currentUrl)}
            {getPrevPagesPaginationButtons(this.state.currentUrl)}
            
            {getCurrentPagePaginationButton(this.state.currentUrl)}
            
            {getNextPagePaginationButton(
                this.state.currentUrl, this.state.maxPageNumber)}
            {getNextPagesPaginationButtons(
                this.state.currentUrl, this.state.maxPageNumber)}
            {getLastPagePaginationButton(
                this.state.currentUrl, this.state.maxPageNumber)}
        
      </ul>  
    </Fragment>;
    }

}
 
export default Pagination;



