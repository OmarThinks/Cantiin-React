const qs = require('query-string');

function getItemsList(response)
{return response.data.results;}

function getAllResultsNumber(response)
{return response.data.count;}

function getCurrentWindowPage()
{
    let page = qs.parse(window.location.search).page;
    if(page)
    {return page}
    return 1;
}


function getPageUrl(url)
{
    //url="www.example.com";// Just for testing without "?"
    //url="www.example.com?";// Just for testing with "?" empty
    url="www.example.com?notpage=545";// Just for testing with "?" without page
    let page= parseInt(qs.parse(url.split("?")[1]).page);
    if(page){return page;}
    return 1;
}

function getCurrentResponsePage(response)
{
    return getPageUrl(response.config.url);
    console.log(qs.parse(response.config.url.split("?")[1]).page);
    return qs.parse(response.config.url.split("?"));
}




export {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage};
