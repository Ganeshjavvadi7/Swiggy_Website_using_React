import { LOGO_URL } from "../../utils/constant";
import { useState, useEffect } from "react";
import useOnlineListener from "../../utils/useOnlineListener";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  useEffect(() => {
    console.log("useEffect");
  }, []);
  const onlineStatus = useOnlineListener();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex bg-amber-400 justify-between text-xl/4 ">
      <div>
        <img className="w-28" src={LOGO_URL} alt="logo"></img>
      </div>

      <div className="p-5 mt-8 items-center">
        <ul className="flex space-x-4">
          <li className="px-6">{onlineStatus === "online" ? "✅" : "⛔️"}</li>
          <li className="px-6">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-6">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-6">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-6">
            <Link to="/cart">Cart🛒 ({cartItems.length})</Link>
          </li>
          <button
            className="border-2  px-4 py-2 bg-lime-600 border-lime-500 text-base"
            onClick={() => {
              return btnName === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
