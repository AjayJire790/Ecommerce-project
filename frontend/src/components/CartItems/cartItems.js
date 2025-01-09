import React from "react";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "./cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteCartItem(item._id));
  };

  return (
    <div className="cart-item">
      <h4>{item.productName}</h4>
      <p>Quantity: {item.quantity}</p>
      <button onClick={handleRemove} className="remove-btn">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
