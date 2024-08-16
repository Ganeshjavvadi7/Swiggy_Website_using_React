import { CDN_URL } from "../../utils/constant";

const RestaurantCard = (props) => {
  //console.log("This is prop");
  //console.log(props);
  const resData = props.resdata.info;
  return (
    //use w-[200px] as w-200 is not available
    <div className="  m-3 p-4 w-[220px] overflow-auto rounded-md bg-gray-100  hover:bg-gray-300">
      <div className="h-4/12">
        <img
          className="w-12/12 rounded-lg"
          src={CDN_URL + resData.cloudinaryImageId}
        />
      </div>
      <div className="h-8/12">
        <h3 className="font-bold py-2">{resData.name}</h3>
        <div className="cuisine">
          <h3>{resData.cuisines.join(",")}</h3>
        </div>
        <h3>{resData.locality}</h3>
        <h3>{resData.avgRatingString}⭐️</h3>

        <h3>{resData.costForTwo}</h3>
        <h3>Delivery Time: {resData.sla.slaString}</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
