import { Component } from 'react';
import {buildUrl, getPureUrl, getUrlQueryParameters,getUrlSpecificQueryPramater,
    getUrlPage} from "../functions/urls";
import {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage,
        getApiResponsePage,getMaxPage} from '../functions/fetching/list';
import {getCurrentPagePaginationButton} from '../functions/pagination';
    



class Pagination extends Component {
    constructor(props) {
        console.log("This is props");
        super(props);
        let response = props.response;
        this.state = 
    { 
        "response":response,
        "currentPage":getCurrentWindowPage(),
        "currentResponsePage":getCurrentResponsePage(response),
        "maxPage":getMaxPage(response),
        "nextPage":getApiResponsePage(response, true),
        "previousPage":getApiResponsePage(response, false)
    };
    }
    render() { 

        let minPageButton = "";
        let maxPageButton = "";
        let currentPageButton = "";
        let nextPageButton = "";
        let prevPageButton = "";

        if(this.state.previousPage)
        {
            prevPageButton=
            <a href={this.state.previousPage}>
                <button>
                {"<"}
                </button>
                </a>; 
        }
        else{
            prevPageButton = <button disabled> {"<"} </button>;
        }
        if(this.state.nextPage)
        {
            nextPageButton=
            <a href={this.state.nextPage}>
                <button>
                {">"}
                </button>
            </a>; 
        }
        else{
            nextPageButton = <button disabled> {">"} </button>;
        }
        



        return ( <div>
            This is pagination
        <ul>
        <li>{prevPageButton}</li>
        <li>{nextPageButton}</li>
        </ul>
            </div> );
    }
}
 
export default Pagination;



