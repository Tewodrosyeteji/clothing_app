import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./CatagoriesPreview.scss";

const CatagoresPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container ">
      <h2>
        <Link className="title" to={title}>
          {title}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CatagoresPreview;
