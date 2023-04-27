import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CategoryContainer, CategoryTitle } from "./Category.style";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectCategoryIsLoading,
} from "../../store/categories/categoriesSelector";
import Spinner from "../../components/spinner/spinner";

export type CategoryParamsProps = {
  catagory: string;
};
const Catagory = () => {
  const { catagory } = useParams<CategoryParamsProps>() as CategoryParamsProps;
  const catagoriesMap = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoryIsLoading);
  const [products, setProducts] = useState(catagoriesMap[catagory]);

  useEffect(() => {
    setProducts(catagoriesMap[catagory]);
  }, [catagory, catagoriesMap]);
  return (
    <>
      <CategoryTitle>{catagory.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};

export default Catagory;
