import React from "react";
import CustomCategory from "./CustomCategory";
import { CategoryListStyle } from "./Category.styled";

const CategoryList = ({ categoryData }) => {
  return (
    <CategoryListStyle className="col">
      {categoryData.map((item) => {
        return (
          <CustomCategory
            categoryTitle={item.categoryTitle}
            categoryImage={item.categoryImg}
          />
        );
      })}
    </CategoryListStyle>
  );
};

export default CategoryList;
