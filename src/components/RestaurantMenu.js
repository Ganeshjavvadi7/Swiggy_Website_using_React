import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../../utils/constant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const [resMenuData, setResMenuData] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const jsondata = await data.json();
    // console.log(jsondata);
    setResMenuData(jsondata.data);
    console.log("MENU JSON DATA:");
    console.log(resMenuData);
    // var { name, id, cuisines, costForTwoMessage, avgRating } = resMenuData;
  };
  // jsondata.data.cards[2].card.card.info;

  if (resMenuData === null) return <Shimmer />;
  const menulist =
    resMenuData.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;
  console.log("Only Menu List ");
  console.log(menulist);

  const { name, cuisines, costForTwoMessage, avgRating } =
    resMenuData.cards[2].card.card.info;

  console.log(name);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <div>Cuisines: {cuisines.join(",")}</div>
      <div>AvgCost : {costForTwoMessage}</div>

      <div>{avgRating}⭐️</div>
      <h2>Menu</h2>

      <ul>
        {menulist.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₨.
            {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
