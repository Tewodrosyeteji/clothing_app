import { Routes, Route } from "react-router-dom";
import "./Shop.scss";
import CatagoresPreview from "../CatagoriesPreview/CatagoriesPreview";
import Catagory from "../Catagory/Catagory";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoryStart } from "../../store/categories/categoriesAction";
const Shop = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(fetchCategoryStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CatagoresPreview />} />
      <Route path=":catagory" element={<Catagory />} />
    </Routes>
  );
};

export default Shop;
