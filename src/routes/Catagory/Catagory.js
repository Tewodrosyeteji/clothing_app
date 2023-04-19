import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Category.scss";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categoriesSelector";

const Catagory = () => {
  const { catagory } = useParams();
  console.log("render/re-render occure");
  const catagoriesMap = useSelector(selectCategories);
  // const { catagoriesMap } = useContext(CatagoriesContext);
  const [products, setProducts] = useState(catagoriesMap[catagory]);

  useEffect(() => {
    console.log("useEffect fire from setProduct");
    setProducts(catagoriesMap[catagory]);
  }, [catagory, catagoriesMap]);
  return (
    <>
      <h2 className="category-title ">{catagory.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Catagory;
