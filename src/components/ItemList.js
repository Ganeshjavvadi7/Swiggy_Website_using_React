import { CDN_URL } from "../../utils/constant";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({ item }) => {
  console.log("item" + { item });
  const itemInfo = item.card.info;
  console.log("ItemInfo");
  console.log(itemInfo);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    console.log("dispatch");
    console.log(item);
    dispatch(addItem(item));
  };
  return (
    <div className=" py-4 px-1 m-4 border-b-4 border-gray-500 flex justify-between">
      <div className="w-9/12">
        <span className="text-lg">
          {itemInfo.name} - ₹.
          {itemInfo.price ? itemInfo.price / 100 : itemInfo.defaultPrice / 100}
        </span>
        <div className="text-sm font-extralight">
          <span className="text-orange-700 ">Description : </span>
          {itemInfo.description}
        </div>
      </div>

      <div className="w-3/12  p-2">
        <div className="absolute p-2 mx-4">
          <button
            className="bg-white text-sm"
            onClick={() => handleAddItem(item)}
          >
            add+
          </button>
        </div>

        <img src={CDN_URL + itemInfo.imageId}></img>
      </div>
    </div>
  );
};

export default ItemList;
