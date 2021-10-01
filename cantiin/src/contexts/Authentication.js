import {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import { settings } from '../settings';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    
    const [authState, setAuthState] = useState( 
        {
            "is_authenticated":false,
            "user":null
        } 
    );

    useEffect(
        ()=>{
            localStorage.setItem("products", JSON.stringify(authState));
        }
        ,[authState]);
    
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

    return ( 
    <ProductContext.Provider value={state, refetchIsAuthenticated}>
        {props.children}
    </ProductContext.Provider> );
}
 
export {AuthContext, AuthContextProvider};