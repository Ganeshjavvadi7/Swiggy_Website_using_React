import { LOGO_URL } from "../../utils/constant";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect");
  }, []);
  return (
    <div className="header">
      <div className="logo-containiner">
        <img className="logo" src={LOGO_URL} alt="logo"></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
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
