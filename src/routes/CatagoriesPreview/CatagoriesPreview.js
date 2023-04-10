import React from "react";
import { useContext } from "react";
import { CatagoriesContext } from "../../context/CatagoriesContext/CatagoriesContext";
import CatagoriesPreview from "../../components/CatagoriesPreview/CatagoresPreview";
const CatagoresPreview = () => {
  const { catagoriesMap } = useContext(CatagoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(catagoriesMap).map((title) => {
        const products = catagoriesMap[title];
        return (
          <CatagoriesPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CatagoresPreview;
