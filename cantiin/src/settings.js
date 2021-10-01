const backend_url = "https://cantiin.com";
const frontend_url = "";


const backend_urls = 
{
    "products":
    {
        "list":backend_url+"/api/products/"
    },
    "auth":
    {
        "user":"/api/auth/custom/user/",
        "signup":"/api/auth/custom/user/",
        "login":"/api/auth/custom/login/",
        "logout":"api/auth/custom/logout/",
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



const defaultPerPage = 10;



const settings={
    backend_urls: backend_urls,
    frontend_urls: frontend_urls,
    defaultPerPage:defaultPerPage
};




export {settings};

