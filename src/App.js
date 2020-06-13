import React, { useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import CustomInput from "./CustomInput";

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
      `https://api.edamam.com/search?q=${foodSearch}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  };

  // useEffect(() => {
  //   getRecipes();
  // }, []);

  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSubmit}>
        <CustomInput
          className={"search-bar"}
          type={"text"}
          name={"foodSearch"}
          value={foodSearch}
          onChange={handleChange}
          placeholder={"eg banana, rice, yam"}
        />

        <button className="search-button" type="submit">
          searchFoods
        </button>
      </form>
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
