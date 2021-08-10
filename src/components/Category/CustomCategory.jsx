import React from "react";
import { useRouter } from "next/router";
import { CustomCategoryStyle } from "./Category.styled";

const CustomCategory = ({ categoryTitle, categoryImage }) => {
  const router = useRouter();
  return (
    <CustomCategoryStyle
      onClick={() => router.push({ pathname: "/search", query: { q: categoryTitle } })}
    >
      <img className="img" src={categoryImage} alt="img" />
      <h3>{categoryTitle}</h3>
    </CustomCategoryStyle>
  );
};

export default CustomCategory;
