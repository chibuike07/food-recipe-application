import React from "react";
import CustomLink from "./CustomLink";
import Styles from "./preview.module.css";
const Recipe = ({ src, title, calories, ingredient, url }) => {
  const { preview_container } = Styles;
  return (
    <div className={preview_container}>
      <div>
        <CustomLink href={url} text={<img src={src} alt={"food view"} />} />
        <h1>{title}</h1>
      </div>
      <div>
        <h2>ingredients</h2>
        <ul style={{ listStyle: "none" }}>
          {ingredient && ingredient.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
