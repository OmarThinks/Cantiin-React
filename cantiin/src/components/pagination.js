import { Component } from 'react';
import {buildUrl, getPureUrl, getUrlQueryParameters,getUrlSpecificQueryPramater,
    getUrlPage} from "../functions/urls";
import {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage,
        getApiResponsePage,getMaxPage} from '../functions/fetching/list';




class Pagination extends Component {
    constructor(props) {
        let request = props.request;

        this.state = { "request":request }
    }
    render() { 
        return ( <div>This is pagination</div> );
    }
}
 
export default Pagination;



