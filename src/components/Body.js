import RestaurantCard from "./RestaurantCard";
import res_data from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineListener from "../../utils/useOnlineListener";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log("In Body");
    console.log(jsonData);
    console.log(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setListOfRestaurants(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(listOfRestaurants);
  };
  const onlineStatus = useOnlineListener();

  if (onlineStatus === "offline") {
    return <div>You are offline</div>;
  }
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex space-x-5">
        <div className="p-2 space-x-2">
          <input
            type="text"
            className="border-2 border-black rounded-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>

          <button
            className="border-2 bg-gray-400 px-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              let newfilteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setListOfRestaurants(filteredRestaurants);
              setFilteredRestaurants(newfilteredRestaurants);
            }}
          >
            search
          </button>
        </div>
        <button
          className="bg-gray-400 px-2 m-2 rounded-lg"
          onClick={() => {
            console.log("Button Clicked");
            const updatedResList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setListOfRestaurants(updatedResList);

            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurantCard resdata={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
