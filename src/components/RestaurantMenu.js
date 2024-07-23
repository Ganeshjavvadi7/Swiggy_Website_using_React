import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../../utils/constant";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenuInfo = useRestaurantMenu(resId);
  console.log("UI");
  console.log(resMenuInfo);

  // jsondata.data.cards[2].card.card.info;

  if (resMenuInfo === null) return <Shimmer />;
  const menulist =
    resMenuInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;
  console.log("Only Menu List ");
  console.log(menulist);

  const { name, cuisines, costForTwoMessage, avgRating } =
    resMenuInfo.cards[2].card.card.info;

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
