import Headers from "./components/Header.js";
import Meals from "./components/Meals.js";
import { useState, useEffect } from "react";


const App = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const response = await fetch("http://localhost:3001/meals");
      const responseData = await response.json();
      setMeals(responseData);
    };
    getMeals();
  }, []);
  return (
    <>
      <Headers />
      <Meals meals = {meals}/>
    </>
  );
};

export default App;
