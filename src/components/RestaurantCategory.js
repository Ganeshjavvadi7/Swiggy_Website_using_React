import { useState } from "react";
import React from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  const itemsList = category.card.card.itemCards;
  //console.log("ItemList");
  console.log(category);
  // console.log(itemsList);
  const [collapse, setCollaps] = useState(false);

  const handleClick = () => {
    setShowIndex();
    setCollaps(!collapse);
    console.log("clicked");
  };
  return (
    <div className="w-6/12  mx-auto my-4 border-spacing-4 bg-gray-200 p-3 shadow-md  font-semibold">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {category.card.card.title}({category.card.card.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>
        {showItems &&
          collapse &&
          itemsList.map((item) => (
            <ItemList key={item.card.info.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
