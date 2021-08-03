import React from "react";
import { CustomCategoryStyle } from "./Category.styled";
const CustomCategory = ({ categoryTitle, categoryImage }) => (
  <CustomCategoryStyle>
    <img
      className="img"
      src={categoryImage}
      alt="img"
      width={500}
      height={600}
    />
    <h3>{categoryTitle}</h3>
  </CustomCategoryStyle>
);

export default CustomCategory;
