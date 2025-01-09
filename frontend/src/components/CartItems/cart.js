import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems } from "./cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.length > 0 ? (
        items.map((item) => <CartItem key={item._id} item={item} />)
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
