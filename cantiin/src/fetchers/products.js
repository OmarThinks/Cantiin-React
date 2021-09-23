import { settings } from '../settings';

const axios = require('axios');
let local = false;

let url = 'https://cantiin.com/api/products/';

if(local){url = "http://127.0.0.1:8000/api/products/";}


function productsListFetcher(pageNumber = 1)
{

    var config = {
        method: 'get',
        url: url,
          
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

