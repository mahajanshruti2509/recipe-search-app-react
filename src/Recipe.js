import React from 'react';
import style from './Recipe.module.css';

const Recipe = ({title, calories, image, ingredients, dietLabels, healthLabels}) => {
  return(
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p className={style.recipeAttributes}>{Math.round(calories)} kCal | { dietLabels.length === 0 ? "NA" : dietLabels[0]} | {healthLabels[0]}</p>
      <img className={style.image} src={image} alt=""/>
    </div>
  );
}

export default Recipe;