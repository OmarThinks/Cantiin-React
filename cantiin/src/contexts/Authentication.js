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
        .then((response)=>{
            let correctAuthState = {"is_authenticated":true,"user":response.data};
            localStorage.setItem("authState",JSON.stringify(correctAuthState));
            setAuthState(correctAuthState);
        })
        .catch((err)=>{
            let correctAuthState = {"is_authenticated":false, "user":null};
            localStorage.setItem("authState",JSON.stringify(correctAuthState));
            setAuthState(correctAuthState);
        });
    }
    
    useEffect(()=>{refetchIsAuthenticated();},[localStorage.getItem("authState")]);

    return ( 
    <AuthContext.Provider value={{...authState, refetchIsAuthenticated}}>
        {props.children}
    </AuthContext.Provider> );
}
 
export {AuthContextProvider};