const qs = require('query-string');

function getItemsList(response)
{return response.data.results;}

function getAllResultsNumber(response)
{return response.data.count;}





function getUrlQueryParameters(url)
{
    //url="www.example.com";// Just for testing without "?"
    //url="www.example.com?";// Just for testing with "?" empty
    //url="www.example.com?notpage=545";// Just for testing with "?" without page
    //url="www.example.com?page=545";// Just for testing with "?" without page
    let params = url.split("?")[1];
    if(params){return qs.parse(params);}
    else{return {};}
}



function getUrlSpecificQueryPramater(url, param,parser,defaultValue)
{
    let queryParam = (function(url, param,parser) {
        try {
          return parser(getUrlQueryParameters(url)[param]);
        } catch (error) {
            return null;
        }
      })(url, param,parser);

    if(queryParam){return queryParam;}
    return defaultValue;
}





function getUrlPage(url)
{
    //console.log(getUrlQueryParameters(url));
    //url="www.example.com";// Just for testing without "?"
    //url="www.example.com?";// Just for testing with "?" empty
    //url="www.example.com?notpage=545";// Just for testing with "?" without page
    //url="www.example.com?page=2";// Just for testing with "?" without page

    console.log(getUrlSpecificQueryPramater(url, "page",parseInt,1));
    return getUrlSpecificQueryPramater(url, "page",parseInt,1);

}


function getCurrentWindowPage()
{return getUrlPage(window.location.href);}

function getCurrentResponsePage(response)
{return getUrlPage(response.config.url);}




function getResponseNextPage(response)
{
    //return response.data;
    console.log(getUrlPage(response.config.url));
}


export {getItemsList, getAllResultsNumber, getCurrentWindowPage,getCurrentResponsePage,
    getResponseNextPage};
