import {buildUrl, getPureUrl, getUrlQueryParameters,getUrlSpecificQueryPramater,
    getUrlPage} from "../functions/urls";
import {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage,
        getApiResponsePage,getMaxPage} from '../functions/fetching/list';


function getCurrentPagePaginationButton(currentUrl=window.location.href)
{
    let currentPageNumber = getUrlPage(currentUrl);
    return <li>
        <button disabled>{currentPageNumber}</button>
    </li>;
}
        
function getPrevPagePaginationButton(currentUrl=window.location.href)
{
    let currentPageNumber = getUrlPage(currentUrl);
    if(currentPageNumber==1)
    {return <li>
        <button disabled>{"<"}</button>
    </li>}

    let prevQueryParameters = getUrlQueryParameters(currentUrl);
    prevQueryParameters["page"]= currentPageNumber-1;
    
    let href = buildUrl(getPureUrl(currentUrl),prevQueryParameters);
    
    return <li>
        <a href={href}>
            <button>{prevQueryParameters["page"]}</button>
        </a>
    </li>;
}

        


export {getCurrentPagePaginationButton,getPrevPagePaginationButton};
