import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../../utils/constant";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenuInfo = useRestaurantMenu(resId);
  console.log("UI");
  console.log(resMenuInfo);
  const [showIndex, setShowIndex] = useState(null);
  // jsondata.data.cards[2].card.card.info;

  if (resMenuInfo === null) return <Shimmer />;
  const menulist =
    resMenuInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;
  console.log("Only Menu List ");
  //console.log(menulist);

  const categories =
    resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("of Type Categories");
  console.log(typeof categories);
  console.log(categories);

  const { name, cuisines, costForTwoMessage, avgRating } =
    resMenuInfo.cards[2].card.card.info;

  console.log(name);
  return (
    <>
      <div className="w-6/12 flex flex-col items-center border-2m p-10 m-auto my-3  bg-gray-200 justify-center text-lg shadow-xl">
        <h1 className="font-bold text-3xl">{name}</h1>
        <div>Cuisines: {cuisines.join(",")}</div>
        <div>AvgCost : {costForTwoMessage}</div>

        <div>Rating: {avgRating}⭐️</div>
      </div>
      <div className="text-xl py-3 w-6/12 m-auto font-semibold">
        <h2>Menu</h2>
      </div>

      {categories.map((c, index) => (
        <RestaurantCategory
          key={c?.card?.card.title}
          category={c}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </>
  );
};
export default RestaurantMenu;

// <ul>
//   {menulist.map((item) => (
//     <li key={item.card.info.id}>
//       {item.card.info.name} - ₨.
//       {item.card.info.price / 100}
//     </li>
//   ))}
// </ul>;
