import {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import { settings } from '../settings';
import fetchers from '../helpers/fetchers';

const AuthContext = createContext();

const AuthContextProvider = (props) => {
    
    const [authState, setAuthState] = useState( 
        {
            "is_authenticated":false,
            "user":null
        } 
    );


    const refetchIsAuthenticated = () =>{
        fetchers.auth.who()
        .then((response)=>{setAuthState({
            "is_authenticated":true,
            "user":response.data
        })})
        .catch((err)=>{setAuthState({"is_authenticated":false, "user":null})});
    }

    //useEffect(()=>{refetchIsAuthenticated();},[authState]);//resulkts in infinity loop

    return ( 
    <AuthContext.Provider value={authState, refetchIsAuthenticated}>
        {props.children}
    </AuthContext.Provider> );
}
 
export {AuthContext, AuthContextProvider};