import React from "react";
import { CustomCategoryStyle } from "./Category.styled";

const CustomCategory = ({ categoryTitle, categoryImage }) => (
  <CustomCategoryStyle>
    <img className="img" src={categoryImage} alt="img" />
    <h3>{categoryTitle}</h3>
  </CustomCategoryStyle>
);

export default CustomCategory;
