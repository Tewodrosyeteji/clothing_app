import React from "react";
import CatagoryItems from "../Catagory-items/CatagoryItems";
import "./directory.scss";

const Directory = ({ catagories }) => {
  return (
    <div className="directory-container">
      {catagories.map((catagory) => (
        <CatagoryItems catagory={catagory} key={catagory.id} />
      ))}
    </div>
  );
};

export default Directory;
