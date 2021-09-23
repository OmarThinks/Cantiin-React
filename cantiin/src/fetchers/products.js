import { settings } from '../settings';
const axios = require('axios');


function productsListFetcher(pageNumber = 1)
{

    var config = {
        method: 'get',
        url: settings.backend_urls.products.list,
          
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });


    /*let fetcher = axios({
        method: 'get',
        url: `${settings.backend_urls.products.list}?pageNumber=${pageNumber}`,
        headers:{"Access-Control-Allow-Origin":"*"}
    }).then(function (response) {
        console.log(response);
      })
    .catch(function (error){
        console.log(error);
    });
    return fetcher*/
    return "";
}


export {productsListFetcher};

