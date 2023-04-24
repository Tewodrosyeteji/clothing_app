import React from "react";
import CatagoriesPreview from "../../components/CatagoriesPreview/CatagoresPreview";
import { useSelector } from "react-redux";
import { selectCategories,selectCategoryIsLoading } from "../../store/categories/categoriesSelector";
import Spinner from "../../components/spinner/spinner";
const CatagoresPreview = () => {
  const categoriesMap = useSelector(selectCategories);
  const isLoading=useSelector(selectCategoryIsLoading)
  return (
    <div className="shop-container">
      { isLoading?<Spinner/>:
      Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CatagoriesPreview key={title} title={title} products={products} />
        );
      })
      }
    </div>
  );
};

export default CatagoresPreview;
