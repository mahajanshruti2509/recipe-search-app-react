import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState([]);
  const[query, setQuery] = useState('');

  const APP_ID = "e5a24496";
  const APP_KEY = process.env.REACT_APP_KEY;
  let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async() => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }
  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type ="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map( recipe => (
          <Recipe
            key = {recipe.recipe.label}
            title = {recipe.recipe.label}
            calories = {recipe.recipe.calories}
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
            dietLabels = {recipe.recipe.dietLabels}
            healthLabels = {recipe.recipe.healthLabels}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
