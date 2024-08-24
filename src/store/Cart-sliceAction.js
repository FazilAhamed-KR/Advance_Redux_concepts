import { replaceCart } from "./Cart-slice";
import { showNotification } from "./Ui-slice";

export const fetchData = async (dispatch) => {
  // return  (dispatch) => {
  const fetchSendData = async () => {
    const response = await fetch(
      "https://advanceredux-97f77-default-rtdb.firebaseio.com/cart.json"
    );

    if (!response.ok) {
      throw new Error("Sending a bad data to the resquest");
    }

    const data = await response.json();
    return data;
  };
  
  try {
    const cartData = await fetchSendData();
    dispatch(
      replaceCart({
        item: cartData.item || [],
        totalQuantity: cartData.totalQuantity,
      })
    );
  } catch (error) {
    dispatch(
      showNotification({
        status: "error",
        title: "error in the Sent data",
        message: "failed to get responece",
      })
    );
  }
  // };
};

export const sendData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "Sending request",
        message: "Sending a cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://advanceredux-97f77-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            item: cart.item,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending a bad data to the resquest");
      }
    };

    try {
      await sendRequest();
      dispatch(
        showNotification({
          status: "Success",
          title: "Success!",
          message: "Sent a cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "error in the Sent data",
          message: "failed to get responece",
        })
      );
    }
  };
};
