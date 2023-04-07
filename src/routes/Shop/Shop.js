import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductContext/ProductContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Shop.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="product-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
