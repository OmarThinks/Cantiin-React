import {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import { settings } from '../settings';
import fetchers from '../helpers/fetchers';

const AuthContext = createContext();

export default AuthContext;

const AuthContextProvider = (props) => {
    //console.log(localStorage.getItem("authState"))
    let defaultAuthState= 
        (localStorage.getItem("authState")!==null) 
        ? JSON.parse(localStorage.getItem("authState")) 
        : { "is_authenticated":false, "user":null} ;

    const [authState, setAuthState] = useState( defaultAuthState );

    //console.log(authState);

    const refetchIsAuthenticated = () =>{
        fetchers.auth.who()
        .then((response)=>{setAuthState({
            "is_authenticated":true,
            "user":response.data
        });
        })
        .catch((err)=>{setAuthState({"is_authenticated":false, "user":null});
        })
        .finally(()=>{localStorage.setItem("authState",JSON.stringify(authState))});
    }
    
    useEffect(()=>{refetchIsAuthenticated();},[localStorage.getItem("authState")]);

    return ( 
    <AuthContext.Provider value={{...authState, refetchIsAuthenticated}}>
        {props.children}
    </AuthContext.Provider> );
}
 
export {AuthContextProvider};