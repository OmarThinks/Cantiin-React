const backend_url = "https://cantiin.com";
//const backend_url = "http://127.0.0.1:8000";
const frontend_url = "";


const backend_urls = 
{
    "products":
    {
        "list":backend_url+"/api/products/"
    },
    "auth":
    {
        "signup":backend_url+"/api/auth/custom/signup/",
        "login":backend_url+"/api/auth/custom/login/",
        "user":backend_url+"/api/auth/custom/user/",
        "logout":backend_url+"/api/auth/custom/logout/",
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

