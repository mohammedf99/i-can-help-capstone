import React from "react";
import { CategoryStyle } from "../Category/Category.styled";
import CategoryList from "./CategoryList";
// import Image from 'next/image';

const categoryData = [
  {
    categoryTitle: "Design",
    categoryImg:
      "https://super-static-assets.s3.amazonaws.com/2eb0ba56-b6df-40ba-bbd5-2aa0f4a70f67/images/e5045bb3-83b6-419a-957d-e472be2e3df1.jpg",
  },
  {
    categoryTitle: "Department & IT",
    categoryImg:
      "https://miro.medium.com/max/12000/1*avlg0U4o26ozRD2Ft6DT9Q.jpeg",
  },
  {
    categoryTitle: "Video & Audio",
    categoryImg:
      "https://static001.geekbang.org/infoq/dd/dd1fe1c6f074f4085029c007c79a0eed.jpeg",
  },
  {
    categoryTitle: "Translation",
    categoryImg: "https://miro.medium.com/max/9796/0*dzVsd1pvyYupUG54",
  },
  {
    categoryTitle: "Marketing",
    categoryImg:
      "https://files.virgool.io/upload/users/947829/posts/zvvw6isww7dy/onxrrjwhwmfi.png?x-img=v1/resize,w_700/optimize,q_100",
  },
  {
    categoryTitle: "Life Style",
    categoryImg:
      "https://images.squarespace-cdn.com/content/v1/56c78fa1a3360c4744eb2a90/1542228847150-3B8KGYXLG6YY4CD3JHO1/stil-336189-unsplash.jpg",
  },
];

const Category = () => {
  return (
    <CategoryStyle>
      <div className="container">
        <div className="col">
          <h1>Categories</h1>
          
          <CategoryList categoryData={categoryData} />
        </div>
      </div>
      <button className="btn">
        View all
        <img
          className="icon"
          src="https://image.flaticon.com/icons/png/512/545/545682.png"
        />
      </button>
    </CategoryStyle>
  );
};

export default Category;
