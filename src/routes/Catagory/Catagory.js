import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CatagoriesContext } from "../../context/CatagoriesContext/CatagoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Catagory.scss";

const Catagory = () => {
  const { catagory } = useParams();
  const { catagoriesMap } = useContext(CatagoriesContext);
  const [products, setProducts] = useState(catagoriesMap[catagory]);

  useEffect(() => {
    setProducts(catagoriesMap[catagory]);
  }, [catagory, catagoriesMap]);
  return (
    <div className="catagory-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Catagory;
