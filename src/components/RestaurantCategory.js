import { useState } from "react";
import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategory =({category, showItems, setShowIndex})=>{
const handleClick=()=>{
    setShowIndex()
}
  console.log(category, "categ")
    return(
        <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-100 cursor-pointer text-lg font-bold shadow-lg p-4" onClick={handleClick}>
            <div className="flex justify-between">
            <span className="font-bold text-lg">{category.title} ({category.itemCards.length})</span>
            <span onClick={handleClick}>🔽</span>
            </div>
            {showItems?<RestaurantItemList items={category.itemCards}/>:null}
        </div>
        
        </div>
    )
}
export default RestaurantCategory;