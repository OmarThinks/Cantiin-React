import {buildUrl, getPureUrl, getUrlQueryParameters,getUrlSpecificQueryPramater,
    getUrlPage} from "../functions/urls";
import {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage,
        getApiResponsePage,getMaxPage} from '../functions/fetching/list';

import PaginationButton from "../components/paginationButton";



function getCurrentPagePaginationButton(currentUrl=window.location.href)
{
    return <PaginationButton type="number" active={true}/>
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
    
    
    return <li>
        <a href={buildUrl(getPureUrl(currentUrl),
    {...getUrlQueryParameters(currentUrl),"page":currentPageNumber-1})}>
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

        
    return <li>
        <a href={buildUrl(getPureUrl(currentUrl),
    {...getUrlQueryParameters(currentUrl),"page":1})}>
            <button>{"<<"}</button>
        </a>
    </li>;
}













function getNextPagePaginationButton(currentUrl=window.location.href,maxPage)
{
    let currentPageNumber = getUrlPage(currentUrl);
    if(currentPageNumber>=maxPage)
    {return <li>
        <button disabled>{">"}</button>
    </li>}

    
    return <li>
        <a href={buildUrl(getPureUrl(currentUrl),
            {...getUrlQueryParameters(currentUrl),
            "page":currentPageNumber+1})}>
            <button>{">"}</button>
        </a>
    </li>;
}






function getLastPagePaginationButton(currentUrl=window.location.href,maxPage)
{
    let currentPageNumber = getUrlPage(currentUrl);
    if(currentPageNumber>=maxPage)
    {return <li>
        <button disabled>{">>"}</button>
    </li>}
    
    
    return <li>
        <a href={buildUrl(getPureUrl(currentUrl),
    {...getUrlQueryParameters(currentUrl),"page":maxPage})}>
            <button>{">>"}</button>
        </a>
    </li>;
}









function getPrevPagesPaginationButtons(currentUrl=window.location.href,maxPage)
{

    let currentPageNumber = getUrlPage(currentUrl);

    let firstButton =<li>
    <a href={buildUrl(getPureUrl(currentUrl),
        {...getUrlQueryParameters(currentUrl),"page":1})}>
            <button>{"<"}</button>
        </a>
    </li>;
    
    let prev1Button =<li>
    <a href={buildUrl(getPureUrl(currentUrl),
        {...getUrlQueryParameters(currentUrl),"page":currentPageNumber-1})}>
            <button>{"<"}</button>
        </a>
    </li>;
    
    let prev2Button =<li>
    <a href={buildUrl(getPureUrl(currentUrl),
        {...getUrlQueryParameters(currentUrl),"page":currentPageNumber-1})}>
            <button>{"<"}</button>
        </a>
    </li>;



    if(currentPageNumber<=1)
    {return <li>
        <button disabled>{"<"}</button>
    </li>}
    
    
    return <li>
        <a href={buildUrl(getPureUrl(currentUrl),
    {...getUrlQueryParameters(currentUrl),"page":currentPageNumber-1})}>
            <button>{"<"}</button>
        </a>
    </li>;
}








function getNextPagesPaginationButtons(currentUrl=window.location.href,maxPage)
{
    let currentPageNumber = getUrlPage(currentUrl);
    if(currentPageNumber>=maxPage)
    {return <li>
        <button disabled>{">>"}</button>
    </li>}

    let currentQueryParameters = getUrlQueryParameters(currentUrl);
    currentQueryParameters["page"]= maxPage;
    
    let href = buildUrl(getPureUrl(currentUrl),currentQueryParameters);
    
    return <li>
        <a href={href}>
            <button>{">>"}</button>
        </a>
    </li>;
}
















export {getCurrentPagePaginationButton,getPrevPagePaginationButton,
    getFirstPagePaginationButton,getNextPagePaginationButton,
    getLastPagePaginationButton};
