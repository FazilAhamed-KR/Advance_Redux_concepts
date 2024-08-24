import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendData } from "./store/Cart-sliceAction";
import { fetchData } from "./store/Cart-sliceAction";

let StartingValue = true;

function App() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.ui.cartShow);
  const cart = useSelector((state) => state.CartItemSlice);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (StartingValue) {
      StartingValue = false;
      return;
    }
    if (cart.change) {
      dispatch(sendData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
