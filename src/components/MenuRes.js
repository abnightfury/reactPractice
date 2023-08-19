import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const MenuRes = () => {
  // const [resMenu, setResMenu] = useState(null)
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const resMenu = useRestaurantMenu(resId);
  //   useEffect(()=>{
  //       fetchMenu()
  //   },[])

  // const fetchMenu=async()=>{
  //   const data = await fetch(MENU_API+resId);
  //   const json= await data.json()
  //   setResMenu(json.data);
  //   console.log(resMenu)
  // }
  if (resMenu === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  console.log(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR, "resmenu");
  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories, "category");
  return (
    <div className="text-center">
      <h1 className="font-bold my-3 text-2xl">{name}</h1>
      <p className="mt-1 mb-0">{cuisines.join(",")}</p>
      <p className="mt-1 mb-0">{costForTwoMessage}</p>
      {/* <ul>
            {itemCards.map((item)=>(
                <li key={item.card.info.id}>{item.card.info.name}: Rs {(item.card.info.price?item.card.info.price:item.card.info.defaultPrice)/100}</li>
                ))}
        </ul> */}
      <div>
        {categories.map((c, i) => (
          <RestaurantCategory
            key={c?.card?.card.title}
            category={c?.card?.card}
            showItems={i === showIndex ? true : false}
            setShowIndex={()=> setShowIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuRes;
