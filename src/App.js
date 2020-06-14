import React, { useState } from "react";
import Recipe from "./Recipe";
import CustomInput from "./CustomInput";
import Styles from "./Styles/recipe.module.css";
import { SelectOption } from "./collection";
const App = () => {
  const APP_ID = "6d6a83db";
  const APP_KEY = "2301e231e5cf4dc8ba58fb8966ba46d3";
  const [recipes, setRecipes] = useState([]);
  const [foodSearch, setFooSearch] = useState({ foodSearch: "", select: "" });

  const handleChange = ({ target }) => {
    setFooSearch(() => ({ [target.name]: target.value }));
    if (target.name === "select") {
      console.log(target.value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    getRecipes();
  };
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${
        foodSearch.foodSearch
      }&app_id=${APP_ID}&app_key=${APP_KEY}&from=${0}&to=${15}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  };

  console.log(SelectOption);
  const { search_bar, search_form, App, search_button } = Styles;
  return (
    <div className={App}>
      <form className={search_form} onSubmit={handleSubmit}>
        <CustomInput
          className={search_bar}
          type={"text"}
          name={"foodSearch"}
          value={foodSearch.foodSearch}
          onChange={handleChange}
          placeholder={"eg food name , fruits name"}
        />
        <div>
          <button className={search_button} type="submit">
            searchFoods
          </button>
        </div>
      </form>
      <select name="select" value={foodSearch.select} onChange={handleChange}>
        {SelectOption &&
          SelectOption.map((values, i) => <option key={i}>{values}</option>)}
      </select>
      {recipes.map(({ recipe }) => {
        return (
          <Recipe
            key={recipe.image}
            title={recipe.label}
            src={recipe.image}
            ingredient={recipe.ingredientLines}
            calories={recipe.calories}
            url={recipe.url}
          />
        );
      })}
    </div>
  );
};

export default App;
