import { Routes, Route } from "react-router-dom";
import "./Shop.scss";
import CatagoresPreview from "../CatagoriesPreview/CatagoriesPreview";
import Catagory from "../Catagory/Catagory";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CatagoresPreview />} />
      <Route path=":catagory" element={<Catagory />} />
    </Routes>
  );
};

export default Shop;
