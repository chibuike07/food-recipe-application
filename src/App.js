import React, { useState } from "react";
import Recipe from "./Recipe";
import CustomInput from "./CustomInput";
import Styles from "./recipe.module.css";
const App = () => {
  const APP_ID = "6d6a83db";
  const APP_KEY = "2301e231e5cf4dc8ba58fb8966ba46d3";
  const [recipes, setRecipes] = useState([]);
  const [foodSearch, setFooSearch] = useState("");

  const handleChange = ({ target }) => {
    setFooSearch(target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    getRecipes();
  };
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${foodSearch}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${0}&to=${15}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  };
  const { search_bar, search_form, App, search_button, previews } = Styles;
  return (
    <div className={App}>
      <form className={search_form} onSubmit={handleSubmit}>
        <CustomInput
          className={search_bar}
          type={"text"}
          name={"foodSearch"}
          value={foodSearch}
          onChange={handleChange}
          placeholder={"eg food name , fruits name"}
        />
        <div>
          <button className={search_button} type="submit">
            searchFoods
          </button>
        </div>
      </form>
      {recipes.map(({ recipe }) => {
        return (
          <div className={previews}>
            <Recipe
              key={recipe.image}
              title={recipe.label}
              src={recipe.image}
              ingredient={recipe.ingredientLines}
              calories={recipe.calories}
              url={recipe.url}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
