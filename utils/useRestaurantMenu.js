import React from "react";
import { useState, useEffect } from "react";

import { MENU_API_URL } from "./constant";
const useRestaurantMenu = (resId) => {
  const [resMenuData, setResMenuData] = useState(null);
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const jsondata = await data.json();
    console.log("JSON Data");
    console.log(jsondata.data);
    setResMenuData(jsondata.data);

    // var { name, id, cuisines, costForTwoMessage, avgRating } = resMenuData;
  };
  console.log("MENU JSON DATA:");
  console.log(resMenuData);
  return resMenuData;
};

export default useRestaurantMenu;
