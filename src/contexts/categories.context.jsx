import { createContext, useState, useEffect } from "react";

import { getCategoryAndDocuments } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(()=>{
    const getCategoriesMap = async()=>{
      const categoryMap = await getCategoryAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    }

    getCategoriesMap();
  },[]);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
  };
  

  // import SHOP_DATA from "../shop-data.js";
  // useEffect(()=>{
  //   addCollectionAndDocuments('categories',SHOP_DATA);
  // },[])