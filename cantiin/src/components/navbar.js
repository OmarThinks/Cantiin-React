import {settings} from '../settings';
import { Fragment, Component } from 'react';


class NavBarLi extends Component {
    render() {

        let {text} = this.props;
        let {link}=this.props;


        return <li className="navBarList-Index">
        <a className="navBarList-Index-Link" href={link}>
        <button className="navBarIndexButton">
                {text}
            </button>
        </a>
    </li>;
    }
}
 




const NavBar = (props) => {
    
    let isLoggedIn=props.isLoggedIn;

    let login_partial = "";
    if(isLoggedIn)
    {
        //console.log("He is Logged In");
        login_partial= <NavBarLi text="Log Out" link={settings.frontend_urls.auth.logout}/>;

    }

    else{
        //console.log("He is Logged Out");
        login_partial= <Fragment>
        <NavBarLi text="Login" link={settings.frontend_urls.auth.login}/>
        <NavBarLi text="Sign Up" link={settings.frontend_urls.auth.signup}/>
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
                    <NavBarLi text="Home" link={settings.frontend_urls.home}/>
                    <NavBarLi text="Products" link={settings.frontend_urls.home}/>
                    </ul>
                <ul className="navBarList navBarList-Right">

                    { login_partial }
                </ul>
        </div>
    )
}

export default NavBar;