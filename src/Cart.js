import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./components/ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Cart.js CartItems");
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12  mx-auto my-4 border-spacing-4 bg-gray-200 p-3 shadow-md  font-semibold">
      <div className="flex justify-between">
        <span className="text-center"> Cart</span>
        <button
          className="border-spacing-4 p-1 rounded-lg bg-yellow-600"
          onClick={handleClearCart}
        >
          clear cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <div className="text-base">
          Cart is Empty and also your stomach is empty. Please add to cart
        </div>
      ) : (
        cartItems.map((item) => (
          <ItemList key={item.card.info.id} item={item} />
        ))
      )}
    </div>
  );
};

export default Cart;
