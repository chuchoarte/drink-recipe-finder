import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";

export const CategoryContext = createContext();

const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categories = await axios.get(url);
            setCategories(categories.data.drinks)
        }
        getCategories();
    }, []);
    

    return (
        <CategoryContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;