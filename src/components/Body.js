import { useState } from "react";
import restaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
 const[restaurantLists, setRestaurantLists] =useState(restaurantList)

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantLists(restaurantList.filter(
                (a) => a.data.avgRating >= 4
              )) 
           
          }}
        >
          Top Rated Button
        </button>
      </div>
      <div className="restro-container">
        {restaurantLists.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
