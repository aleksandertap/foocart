import Button from "./UI/Button.js"
import {CartContext} from "../store/CartContext.js";
import { useContext } from "react";

const MealItem = (props) => {
  const { meals } = props; 
  const { id, image, name, price, description } = meals;
  const {addToCart} = useContext(CartContext)

  return (
    <li className="meal-item">
      <article>
        <img src={require(`../assets/${image}`)} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">
            {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(price)}
          </p>
          <p className="meal-item-description ">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button textOnly={false} onClick={() => addToCart(meals)} >Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
