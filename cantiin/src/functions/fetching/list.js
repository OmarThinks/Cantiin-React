const qs = require('query-string');

function getItemsList(response)
{return response.data.results;}

function getAllResultsNumber(response)
{return response.data.count;}





function getPageUrl(url)
{
    //url="www.example.com";// Just for testing without "?"
    //url="www.example.com?";// Just for testing with "?" empty
    url="www.example.com?notpage=545";// Just for testing with "?" without page
    let page= parseInt(qs.parse(url.split("?")[1]).page);
    if(page){return page;}
    return 1;
}


function getCurrentWindowPage()
{return getPageUrl(window.location.href);}

function getCurrentResponsePage(response)
{return getPageUrl(response.config.url);}




export {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage};
