import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { addItem, removeItem } from "../../store/Cart-slice";

const CartItem = (props) => {
  const { title, quantity, price, id, total } = props.item;
  const dispatch = useDispatch();

  const handleMinus = () => {
    dispatch(removeItem(id));
  };

  const handlePlus = () => {
    dispatch(addItem({ id, title, price }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleMinus}>-</button>
          <button onClick={handlePlus}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
