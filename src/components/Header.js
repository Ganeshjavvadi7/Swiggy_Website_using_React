import { LOGO_URL } from "../../utils/constant";
import { useState, useEffect } from "react";
import useOnlineListener from "../../utils/useOnlineListener";

import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  useEffect(() => {
    console.log("useEffect");
  }, []);
  const onlineStatus = useOnlineListener();

  return (
    <div className="header">
      <div className="logo-containiner">
        <img className="logo" src={LOGO_URL} alt="logo"></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>{onlineStatus === "online" ? "✅" : "⛔️"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
