const MealItem = (props) => {
    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meals.image}`)} alt={props.meals.name}/>
                <div>
                    <h3>{props.meals.name}</h3>
                    <p className="meal-item-price">{props.meals.price}</p>
                    <p className="meal-item-description ">{props.meals.description}</p>
                </div>
                <p>
                    <button className="meal-item-actions">Add to Cart</button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem