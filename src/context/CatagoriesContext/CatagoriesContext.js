import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../../shop-date";
import { getCatagoriesAndDocuments } from "../../utils/firebase/firebase";
export const CatagoriesContext = createContext({
  catagoriesMap: {},
});

export const CatagoriesProvider = ({ children }) => {
  const [catagoriesMap, setCatagoriesMap] = useState({});

  useEffect(() => {
    const getCollectionMap = async () => {
      const collectionMap = await getCatagoriesAndDocuments();
      setCatagoriesMap(collectionMap);
    };
    getCollectionMap();
  }, []);

  const value = { catagoriesMap };
  return (
    <CatagoriesContext.Provider value={value}>
      {children}
    </CatagoriesContext.Provider>
  );
};
