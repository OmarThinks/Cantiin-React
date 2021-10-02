import {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import { settings } from '../settings';

const AuthContext = createContext();

const AuthContextProvider = (props) => {
    
    const [authState, setAuthState] = useState( 
        {
            "is_authenticated":false,
            "user":null
        } 
    );


    
    const refetchIsAuthenticated = () =>{
        let config = {
            method: 'get',
            url: settings.backend_urls.auth.user,
            withCredentials: true,
            };
        axios(config)
        .then((response)=>{setAuthState({
            "is_authenticated":true,
            "user":response.data
        })})
        .catch((err)=>{setAuthState({"is_authenticated":false, "user":null})});
    }

    useEffect(()=>{refetchIsAuthenticated();},[authState]);

    return ( 
    <AuthContext.Provider value={authState, refetchIsAuthenticated}>
        {props.children}
    </AuthContext.Provider> );
}
 
export {AuthContext, AuthContextProvider};