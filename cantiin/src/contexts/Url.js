import {createContext, useState} from 'react';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    
    const [url, setUrl] = useState(window.location.href);

    return ( 
    <ProductContext.Provider value={url, setUrl}>
        {props.children}
    </ProductContext.Provider> );
}
 
export default ProductContextProvider;