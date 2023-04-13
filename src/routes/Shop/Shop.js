import { Routes, Route } from "react-router-dom";
import "./Shop.scss";
import CatagoresPreview from "../CatagoriesPreview/CatagoriesPreview";
import Catagory from "../Catagory/Catagory";
import { getCatagoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategories } from "../../store/categories/categoriesAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCollectionMap = async () => {
      const collectionArray = await getCatagoriesAndDocuments();
      dispatch(setCategories(collectionArray));
    };
    getCollectionMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CatagoresPreview />} />
      <Route path=":catagory" element={<Catagory />} />
    </Routes>
  );
};

export default Shop;
