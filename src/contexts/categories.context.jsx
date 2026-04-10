import { useState, createContext , useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/Firebase/firebase.utils';
export const ProductContext = createContext({
    PRODUCTS: [],
});



export const CategoriesContext = createContext({
    categoryMap: {},
});

export const CategoriesProvider = ({children}) => {
    
const[categoryMap ,setCategoryMap] = useState({});

useEffect(() => {
    const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments();
        setCategoryMap(categoryMap);
    }
    getCategoriesMap();
},[]);

const value = {categoryMap};
return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};