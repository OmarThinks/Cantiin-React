/*
They are all functions
*/


import { settings } from '../settings';
const axios = require('axios');


function productsListFetcher(pageNumber = 1)
{
    var config = {
        method: 'get',
        url: settings.backend_urls.products.list+`?page=${pageNumber}`,
          
      };
    let fetcher = axios(config);
    return fetcher
}


function authWhoFetcher(){
    let fetcher=axios(
        {
            method: 'get',
            url: settings.backend_urls.auth.user,
            withCredentials: true,
        }
    );
    return fetcher;

}







const fetchers={
    products:
    {
        list: productsListFetcher,
        get: "get",
        post: "post",
        delete: "delete",
        edit: "edit"
    },
    auth:
    {
        login: "login",
        logout: "logout",
        who: authWhoFetcher,
    }
};

export default fetchers;