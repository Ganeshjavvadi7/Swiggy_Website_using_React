import { CDN_URL } from "../../utils/constant";

const RestaurantCard = (props) => {
  //console.log("This is prop");
  //console.log(props);
  const resData = props.resdata.info;
  return (
    <div className="res-card">
      <img className="card-logo" src={CDN_URL + resData.cloudinaryImageId} />
      <h3>{resData.name}</h3>
      <h3>{resData.cuisines.join(",")}</h3>
      <h3>{resData.locality}</h3>
      <h3>{resData.avgRatingString}⭐️</h3>

      <h3>{resData.costForTwo}</h3>
    </div>
  );
};

export default RestaurantCard;
