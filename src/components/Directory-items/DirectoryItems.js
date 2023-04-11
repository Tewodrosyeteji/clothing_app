import React from "react";
import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./DirectoryItem.jsx";

import { useNavigate } from "react-router-dom";

const DirectoryItems = ({ catagory }) => {
  const { title, imageUrl, route } = catagory;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Buy now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItems;
