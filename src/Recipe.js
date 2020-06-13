import React from "react";
import CustomLink from "./CustomLink";
const Recipe = ({ src, title, calories, ingredient, url }) => {
  return (
    <div>
      <CustomLink href={url} text={<img src={src} alt={"food view"} />} />
      <h1>{title}</h1>
      <p>{calories}</p>
      <ul style={{ listStyle: "none" }}>
        {ingredient && ingredient.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};

export default Recipe;
