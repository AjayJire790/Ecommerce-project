import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, deleteCartItem } from "./cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, status, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const handleDelete = (cartItemId) => {
    dispatch(deleteCartItem(cartItemId));
  };

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
              <p>{item.productName}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleDelete(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
