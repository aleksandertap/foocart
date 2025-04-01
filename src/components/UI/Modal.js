import { createPortal } from "react-dom";
import { CartContext } from "../../store/CartContext";
import { useContext } from "react";
import Button from "./Button";

const ModalOverlay = () => {
  const { cart } = useContext(CartContext);

  return (
    <dialog className="modal cart">
      <h2>Your cart</h2>
      {
        <ul>
          {cart.map((meal, index) => {
            return (
              <li className="cart-item" key={index}>
                <p>
                  {meal.name} - {meal.quantity}
                </p>
              </li>
            );
          })}
        </ul>
      }
      <p className="cart-total">
        {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
          cart.reduce((sum, meal) => sum + meal.price * meal.quantity, 0)
        )}
      </p>
      <p>
        <Button textOnly={true}>Close</Button>
        <Button>Checkout</Button>
      </p>
    </dialog>
  );
};

const Modal = (props) => {
  return createPortal(<ModalOverlay />, document.getElementById("modal"));
};

export default Modal;
