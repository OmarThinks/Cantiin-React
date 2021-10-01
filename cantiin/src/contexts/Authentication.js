import {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    
    const [state, setAuthenticated] = useState( 
        {
            "is_authenticated":false,
            "user":null
        } 
    );

    useEffect(
        ()=>{
            localStorage.setItem("products", JSON.stringify(state));
        }
        ,[state]);
    
    const refetchIsAuthenticated = () =>{

    }

    return ( 
    <ProductContext.Provider value={state, refetchIsAuthenticated}>
        {props.children}
    </ProductContext.Provider> );
}
 
export {AuthContext, AuthContextProvider};