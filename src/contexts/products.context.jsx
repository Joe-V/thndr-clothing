import { useState, createContext} from 'react';
import PRODUCTS from '../shop-data.json';

export const ProductContext = createContext({
    PRODUCTS: [],
});

export const ProductProvider = ({children}) => {
    
const[products ,setproducts] = useState(PRODUCTS);
const value = {products};
return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};