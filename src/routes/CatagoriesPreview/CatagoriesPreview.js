import React from "react";
import CatagoriesPreview from "../../components/CatagoriesPreview/CatagoresPreview";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categoriesSelector";
const CatagoresPreview = () => {
  const categoriesMap = useSelector(selectCategories);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CatagoriesPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CatagoresPreview;
