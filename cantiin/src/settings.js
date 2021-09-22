const backend_url = "https://www.cantiin.com";
const frontend_url = "";


const backend_urls = 
{
    "products":
    {
        "list":backend_url+"/api/products/"
    }
};


const frontend_urls = 
{
    "home": "/",
    "products":
    {
        "list":frontend_url+"/products",
    },
    "auth":
    {
        "login":frontend_url+"/login",
        "signup":frontend_url+"/signup",
        "logout":frontend_url+"/logout",
    }
};




const settings={
    backend_urls: backend_urls,
    frontend_urls: frontend_urls,
};



export {settings};

