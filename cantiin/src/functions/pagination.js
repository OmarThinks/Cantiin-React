import {buildUrl, getPureUrl, getUrlQueryParameters,getUrlSpecificQueryPramater,
    getUrlPage} from "../functions/urls";
import {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage,
        getApiResponsePage,getMaxPage} from '../functions/fetching/list';

import PaginationButton from "../components/paginationButton";



function getCurrentPagePaginationButton(currentUrl=window.location.href)
{
    return <PaginationButton type="number" active={true} link={currentUrl}/>
}
        
function getPrevPagePaginationButton(currentUrl=window.location.href)
{
    let currentPageNumber = getUrlPage(currentUrl);
    if(currentPageNumber<=1)
    {return <PaginationButton type="prev"/>;}
    
    let link = buildUrl(getPureUrl(currentUrl),
        {...getUrlQueryParameters(currentUrl),"page":currentPageNumber-1});
    return <PaginationButton type="prev" link={link}/>
}

        



function getFirstPagePaginationButton(currentUrl=window.location.href)
{
    let currentPageNumber = getUrlPage(currentUrl);
    if(currentPageNumber<=1)
    {return <PaginationButton type="first"/>;}
        
    let link = buildUrl(getPureUrl(currentUrl),
        {...getUrlQueryParameters(currentUrl),"page":1});
    return <PaginationButton type="first" link={link}/>
}












function getNextPagePaginationButton(currentUrl=window.location.href,maxPageNumber)
{
    let currentPageNumber = getUrlPage(currentUrl);
    if(currentPageNumber>=maxPageNumber)
    {return <PaginationButton type="next"/>;}
        
    let link = buildUrl(getPureUrl(currentUrl),
        {...getUrlQueryParameters(currentUrl),"page":currentPageNumber+1});
    return <PaginationButton type="next" link={link}/>
}






function getLastPagePaginationButton(currentUrl=window.location.href,maxPageNumber)
{
    let currentPageNumber = getUrlPage(currentUrl);
    if(currentPageNumber>=maxPageNumber)
    {return <PaginationButton type="last"/>;}
        
    let link = buildUrl(getPureUrl(currentUrl),
        {...getUrlQueryParameters(currentUrl),"page":maxPageNumber});
    return <PaginationButton type="last" link={link}/>

}









function getPrevPagesPaginationButtons(currentUrl=window.location.href)
{
    let currentPageNumber = getUrlPage(currentUrl);
    let currentPureUrl = getPureUrl(currentUrl);
    let currentQueryParameters = getUrlQueryParameters(currentUrl);

    let linkFirst = buildUrl(currentPureUrl,{...currentQueryParameters,"page":1});
    let linkMinusOne = buildUrl(currentPureUrl,
        {...currentQueryParameters,"page":currentPageNumber-1});
    let linkMinusTwo = buildUrl(currentPureUrl,
        {...currentQueryParameters,"page":currentPageNumber-2});
    let linkMinusThree = buildUrl(currentPureUrl,
        {...currentQueryParameters,"page":currentPageNumber-3});
        


    let firstButton =<PaginationButton type="number" link={linkFirst}/>;
    let minusOneButton =<PaginationButton type="number" link={linkMinusOne}/>;
    let minusTwoButton =<PaginationButton type="number" link={linkMinusTwo}/>;
    let minusThreeButton =<PaginationButton type="number" link={linkMinusThree}/>;


    if (currentPageNumber >= 1){return "";}
    else if (currentPageNumber >= 2){return minusOneButton;}
    else if (currentPageNumber >= 3){return minusTwoButton+
        minusOneButton;}
    else if (currentPageNumber >= 4){return minusThreeButton+
        minusTwoButton+minusOneButton;}
}








function getNextPagesPaginationButtons(currentUrl=window.location.href,maxPageNumber)
{
    let currentPageNumber = getUrlPage(currentUrl);
    let currentPureUrl = getPureUrl(currentUrl);
    let currentQueryParameters = getUrlQueryParameters(currentUrl);


    let linkLast = buildUrl(currentPureUrl,
        {...currentQueryParameters,"page":maxPageNumber});
    let linkPlusOne = buildUrl(currentPureUrl,
        {...currentQueryParameters,"page":currentPageNumber+1});
    let linkPlusTwo = buildUrl(currentPureUrl,
        {...currentQueryParameters,"page":currentPageNumber+2});
    let linkPlusThree = buildUrl(currentPureUrl,
        {...currentQueryParameters,"page":currentPageNumber+3});
        


    let lastButton =<PaginationButton type="number" link={linkLast}/>;
    let plusOneButton =<PaginationButton type="number" link={linkPlusOne}/>;
    let plusTwoButton =<PaginationButton type="number" link={linkPlusTwo}/>;
    let plusThreeButton =<PaginationButton type="number" link={linkPlusThree}/>;

    let pagesDifference = maxPageNumber-currentPageNumber;

    if (pagesDifference >= 0){return "";}
    else if (pagesDifference >= 1){return plusOneButton;}
    else if (pagesDifference >= 2){return plusTwoButton+
        plusOneButton;}
    else{return plusThreeButton+
        plusTwoButton+plusOneButton;}
}












export {getCurrentPagePaginationButton,getPrevPagePaginationButton,
    getFirstPagePaginationButton,getNextPagePaginationButton,
    getLastPagePaginationButton, getPrevPagesPaginationButtons, getNextPagesPaginationButtons};
