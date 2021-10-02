import {settings} from '../settings';


import { Fragment, Component, useContext } from 'react';

import fetchers from "../helpers/fetchers";

import  AuthContext  from '../contexts/Authentication';


const NavBarLi = (props) => {
    
    console.log(props);
    console.log(props.type);

    const {refetchIsAuthenticated} = useContext(AuthContext);

    console.log(refetchIsAuthenticated);

    if(props.type === "logout")
    {
        const logmeout = (e) =>{
            console.log("Let's Logout");
            fetchers.auth.logout()
            .then((response)=>{refetchIsAuthenticated();})
            .catch((err)=>{refetchIsAuthenticated();});
        }

        return (<li className="navBarList-Index">
        <a className="navBarList-Index-Link">
        <button className="navBarIndexButton" onClick={logmeout}>
                {props.text}
            </button>
        </a>
        </li>)
    }



    return (<li className="navBarList-Index">
    <a className="navBarList-Index-Link" href={props.link}>
    <button className="navBarIndexButton">
            {props.text}
        </button>
    </a>
    </li>);
}
 




const NavBar = (props) => {
    
    let {is_authenticated} = useContext(AuthContext);



    console.log(is_authenticated);

    let login_partial = "";
    if(is_authenticated)
    {
        //console.log("He is Logged In");
        login_partial= <NavBarLi text="Log Out" type="logout"/>;

    }

    else{
        //console.log("He is Logged Out");
        login_partial= <Fragment>
        <NavBarLi text="Login" link={settings.frontend_urls.auth.login} type="link"/>
        <NavBarLi text="Sign Up" link={settings.frontend_urls.auth.signup} type="link"/>
    </Fragment>
    ;
        
    }

    return(
        <div className="navBarDiv">
               <ul className="navBarList">
                    <NavBarLi text="Home" link={settings.frontend_urls.home} type="link"/>
                    <NavBarLi text="Products" link={settings.frontend_urls.products.list} type="link"/>
                    </ul>
                <ul className="navBarList navBarList-Right">

                    { login_partial }
                </ul>
        </div>
    )
}

export default NavBar;