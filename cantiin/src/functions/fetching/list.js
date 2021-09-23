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


export {getItemsList, getAllResultsNumber, getCurrentWindowPage};
