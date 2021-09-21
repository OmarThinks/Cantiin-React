import {backend_urls,frontend_urls} from '../settings/urls';




const NavBar = (isLoggedIn) => {
    
    return(
        <div>
               <ul>
                    <li>
                        <a href={frontend_urls.home}>Home</a>
                    </li>
                    <li>
                        <a href={frontend_urls.products.list}>
                        Products
                        </a>
                    </li>



                    <li>
                        <a href={frontend_urls.auth.login}>
                        Login
                        </a>
                    </li>
                    <li>
                        <a href={frontend_urls.auth.signup}>
                        Sign Up
                        </a>
                    </li>
                    <li>
                        <a href={frontend_urls.auth.logout}>
                        Log Out
                        </a>
                    </li>

                </ul>
        </div>
    )
}

export default NavBar;