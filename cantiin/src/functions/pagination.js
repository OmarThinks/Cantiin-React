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
    if(currentPageNumber<=1)
    {return <li>
        <button disabled>{"<"}</button>
    </li>}

    let prevQueryParameters = getUrlQueryParameters(currentUrl);
    prevQueryParameters["page"]= currentPageNumber-1;
    
    let href = buildUrl(getPureUrl(currentUrl),prevQueryParameters);
    
    return <li>
        <a href={href}>
            <button>{"<"}</button>
        </a>
    </li>;
}

        



function getFirstPagePaginationButton(currentUrl=window.location.href)
{
    let currentPageNumber = getUrlPage(currentUrl);
    if(currentPageNumber<=1)
    {return <li>
        <button disabled>{"<<"}</button>
    </li>}

    let prevQueryParameters = getUrlQueryParameters(currentUrl);
    prevQueryParameters["page"]= 1;
    
    let href = buildUrl(getPureUrl(currentUrl),prevQueryParameters);
    
    return <li>
        <a href={href}>
            <button>{"<<"}</button>
        </a>
    </li>;
}













//import maxPage from settings 
function getNextPagePaginationButton(currentUrl=window.location.href,maxPage= maxPage)
{
    let currentPageNumber = getUrlPage(currentUrl);
    if(currentPageNumber>=maxPage)
    {return <li>
        <button disabled>{">"}</button>
    </li>}

    let nextQueryParameters = getUrlQueryParameters(currentUrl);
    nextQueryParameters["page"]= currentPageNumber+1;
    
    let href = buildUrl(getPureUrl(currentUrl),nextQueryParameters);
    
    return <li>
        <a href={href}>
            <button>{">"}</button>
        </a>
    </li>;
}





function getLastPagePaginationButton(currentUrl=window.location.href,maxPage= maxPage)
{
    let currentPageNumber = getUrlPage(currentUrl);
    if(currentPageNumber>=maxPage)
    {return <li>
        <button disabled>{">>"}</button>
    </li>}

    let nextQueryParameters = getUrlQueryParameters(currentUrl);
    nextQueryParameters["page"]= maxPage;
    
    let href = buildUrl(getPureUrl(currentUrl),nextQueryParameters);
    
    return <li>
        <a href={href}>
            <button>{">>"}</button>
        </a>
    </li>;
}
















export {getCurrentPagePaginationButton,getPrevPagePaginationButton,
    getFirstPagePaginationButton,getNextPagePaginationButton,
    getLastPagePaginationButton};
