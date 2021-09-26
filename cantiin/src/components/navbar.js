import {settings} from '../settings';
import { Fragment } from 'react';


const NavBar = (props) => {
    
    let isLoggedIn=props.isLoggedIn;

    let login_partial = "";
    if(isLoggedIn)
    {
        console.log("He is Logged In");
        login_partial=
    <li className="navBarList-Index">
        <a className="navBarList-Index-Link" href={settings.frontend_urls.auth.logout}>
            Log Out
        </a>
    </li>;
    }
    else{
        console.log("He is Logged Out");
        login_partial= <Fragment>
        <li className="navBarList-Index">
        <a className="navBarList-Index-Link" href={settings.frontend_urls.auth.login}>
        Login
        </a>
    </li>
    <li className="navBarList-Index">
        <a className="navBarList-Index-Link" href={settings.frontend_urls.auth.signup}>
        Sign Up
        </a>
    </li>
    </Fragment>
    ;
        
    }

    return(
        <div className="navBarDiv">
               <ul className="navBarList">
                    <li className="navBarList-Index">
                        <a className="navBarList-Index-Link" href={settings.frontend_urls.home}>Home</a>
                    </li>
                    <li className="navBarList-Index">
                        <a className="navBarList-Index-Link" href={settings.frontend_urls.products.list}>
                        Products
                        </a>
                    </li>
                    </ul>
                <ul className="navBarList navBarList-Right">

                    { login_partial }
                </ul>
        </div>
    )
}

export default NavBar;