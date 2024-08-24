import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { toggle } from "../../store/Ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const quantity = useSelector((state) => state.CartItemSlice.totalQuantity);
  const handleToggle = () => {
    dispatch(toggle());
  };
  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
