import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Category.scss";
import { useSelector } from "react-redux";
import { selectCategories,selectCategoryIsLoading } from "../../store/categories/categoriesSelector";
import Spinner from "../../components/spinner/spinner";
const Catagory = () => {
  const { catagory } = useParams();
  const catagoriesMap = useSelector(selectCategories);
   const isLoading=useSelector(selectCategoryIsLoading);
  const [products, setProducts] = useState(catagoriesMap[catagory]);

  useEffect(() => {
    setProducts(catagoriesMap[catagory]);
  }, [catagory, catagoriesMap]);
  return (
    <>
      <h2 className="category-title ">{catagory.toUpperCase()}</h2>
      {isLoading?<Spinner/>: <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>}
     
    </>
  );
};

export default Catagory;
