import React from "react";
import CustomLink from "./CustomLink";
import Styles from "./Styles/preview.module.css";
const Recipe = ({ src, title, ingredient, url }) => {
  const { preview_container, items, item_list } = Styles;
  return (
    <div className={preview_container}>
      <div className={items}>
        <CustomLink href={url} text={<img src={src} alt={"food view"} />} />
        <h1>{title}</h1>
      </div>
      <div className={item_list}>
        <h2>Ingredients</h2>
        <ul>
          {ingredient && ingredient.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
