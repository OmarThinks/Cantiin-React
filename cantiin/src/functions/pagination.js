import {buildUrl, getPureUrl, getUrlQueryParameters,getUrlSpecificQueryPramater,
    getUrlPage} from "../functions/urls";
import {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage,
        getApiResponsePage,getMaxPage} from '../functions/fetching/list';


function getCurrentPagePaginationButton(currentUrl=window.location.href)
{
    let currentPageNumber = getUrlPage(currentUrl);
    return <li>
        <button>{currentPageNumber}</button>
    </li>;
}




export {getCurrentPagePaginationButton};
