import Headers from "./components/Header.js";
import Meals from "./components/Meals.js";
import { useState, useEffect,} from "react";
import CartProvider from "./store/CartContext.js";
import Modal from "./components/UI/Modal.js"


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
      
      <CartProvider >
      <Modal/>
      <Headers />
      <Meals meals = {meals}/>
      </CartProvider>
      </>
    
  );
  
};

export default App;
