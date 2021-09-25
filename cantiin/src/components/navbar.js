import {settings} from '../settings';

const NavBar = (props) => {
    
    let isLoggedIn=props.isLoggedIn;

    let login_partial = "";
    if(isLoggedIn)
    {
        console.log("He is Logged In");
        login_partial=
    <li>
        <a href={settings.frontend_urls.auth.logout}>
            Log Out
        </a>
    </li>;
    }
    else{
        console.log("He is Logged Out");
        login_partial=
            <div>
    <li>
        <a href={settings.frontend_urls.auth.login}>
        Login
        </a>
    </li>
    <li>
        <a href={settings.frontend_urls.auth.signup}>
        Sign Up
        </a>
    </li>
    </div>
    ;
        
    }

    return(
        <div>
               <ul>
                    <li>
                        <a href={settings.frontend_urls.home}>Home</a>
                    </li>
                    <li>
                        <a href={settings.frontend_urls.products.list}>
                        Products
                        </a>
                    </li>
                    { login_partial }
                </ul>
        </div>
    )
}

export default NavBar;