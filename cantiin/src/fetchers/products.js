const axios = require('axios');

import { settings } from '../settings';

function productsListFetcher(pageNumber = 1)
{
    fetcher = axios({
        method: 'get',
        url: `${settings.backend_urls.products.list}?pageNumber=${pageNumber}`,
    });
    return fetcher
}


export {productsListFetcher};

