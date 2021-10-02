import {settings} from '../settings';


import { Fragment, Component, useContext } from 'react';


import  AuthContext  from '../contexts/Authentication';


const NavBarLi = (props) => {
    
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
        login_partial= <NavBarLi text="Log Out" link={settings.frontend_urls.auth.logout}/>;

    }

    else{
        //console.log("He is Logged Out");
        login_partial= <Fragment>
        <NavBarLi text="Login" link={settings.frontend_urls.auth.login}/>
        <NavBarLi text="Sign Up" link={settings.frontend_urls.auth.signup}/>
    </Fragment>
    ;
        
    }

    return(
        <div className="navBarDiv">
               <ul className="navBarList">
                    <NavBarLi text="Home" link={settings.frontend_urls.home}/>
                    <NavBarLi text="Products" link={settings.frontend_urls.products.list}/>
                    </ul>
                <ul className="navBarList navBarList-Right">

                    { login_partial }
                </ul>
        </div>
    )
}

export default NavBar;