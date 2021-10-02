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


const fetchers={
    products:
    {
        list: productsListFetcher,
        get:"get",
        post:"post",
        delete:"delete",
        edit:"edit"
    },
    auth:
    {
        login:"login",
        logout:"logout",
        user:"user",
    }
};

export default fetchers;