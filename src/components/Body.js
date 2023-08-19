import { useState, useEffect, useContext } from "react";
import restaurantList from "../utils/mockData";
import RestaurantCard, { withBadges } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantLists, setRestaurantLists] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurantLists(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const RestaurantCardPromoted = withBadges(RestaurantCard);
  const filterSearch = (e) => {
    const filteredRestaurants = restaurantLists.filter((a) =>
      a.info.name.toLowerCase().includes(e.toLowerCase())
    );
    //console.log(filteredRestaurants)
    setFilteredRestaurant(filteredRestaurants);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like you're offline, Please Check your internet</h1>;
  const {setUserInfo, loggedInUser}= useContext(UserContext)
  return restaurantLists.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center items-center">
        <div className="search m-3 ">
          <label>UserName: </label>
          <input
            type="text"
            className="border border-solid border-gray-500 mr-2  rounded-md w-64 p-2"
            placeholder="Search Restaurants"
            value={loggedInUser}
            onChange={(e) => {
              setUserInfo(e.target.value);
            }}
          />
          
        </div>
        <button
          className="bg-orange-600 h-10  text-xs  p-2 rounded-md text-white hover:bg-red-700"
          onClick={() => {
            setFilteredRestaurant(
              filteredRestaurant.filter((a) => a.info.avgRating >= 4.3)
            );
          }}
        >
          Top Rated Button
        </button>
        <div className="search m-3 ">
          <input
            type="text"
            className="border border-solid border-gray-500 mr-2  rounded-md w-64 p-2"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-red-500 p-2 rounded-md text-white hover:bg-red-700"
            onClick={() => filterSearch(searchText)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restro-container flex flex-wrap m-5 justify-center">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant?.info.id}
              to={"/restaurants/" + restaurant?.info.id}
            >
              {restaurant.info.badges &&
              restaurant.info.badges.imageBadges &&
              restaurant.info.badges.imageBadges.length > 0 ? (
                <RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <RestaurantCard resData={restaurant?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
