import { useState, useEffect } from "react";
import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
  const filterSearch = (e) => {
    const filteredRestaurants = restaurantLists.filter((a) =>
      a.info.name.toLowerCase().includes(e.toLowerCase())
    );
    //console.log(filteredRestaurants)
    setFilteredRestaurant(filteredRestaurants);
  };
  const onlineStatus= useOnlineStatus();
  if(onlineStatus===false) return <h1>Looks like you're offline, Please Check your internet</h1>


  return restaurantLists.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => filterSearch(searchText)}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurant(
              filteredRestaurant.filter((a) => a.info.avgRating >= 4.3)
            );
          }}
        >
          Top Rated Button
        </button>
      </div>
      <div className="restro-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link key={restaurant?.info.id} to ={"/restaurants/"+ restaurant?.info.id}><RestaurantCard
              
              resData={restaurant?.info}
            /></Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
