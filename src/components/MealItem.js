import Button from "./UI/Button.js"

const MealItem = (props) => {
  const price = props.meals.price;
  
  

  return (
    <li className="meal-item">
      <article>
        <img src={require(`../assets/${props.meals.image}`)} alt={props.meals.name} />
        <div>
          <h3>{props.meals.name}</h3>
          <p className="meal-item-price">
            {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(price)}
          </p>
          <p className="meal-item-description ">{props.meals.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button textOnly={false}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
