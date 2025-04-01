import { useEffect, useState } from "react";
import MealItem from "./MealItem.js";

const Meals = (props) => {
  return (
    <ul id="meals">
      {props.meals.map((meal) => {
        return <MealItem key={meal.id} meals={meal} />;
      })}
    </ul>
  );
};

export default Meals;
