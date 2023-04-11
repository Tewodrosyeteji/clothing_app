import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CatagoriesContext } from "../../context/CatagoriesContext/CatagoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Category.scss";

const Catagory = () => {
  const { catagory } = useParams();
  const { catagoriesMap } = useContext(CatagoriesContext);
  const [products, setProducts] = useState(catagoriesMap[catagory]);

  useEffect(() => {
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
