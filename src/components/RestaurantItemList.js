import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantItemList = ({ items }) => {
  //console.log(items, "RestaurantmenuList");
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          className="font-normal  text-left m-2 ml-3 mb-3 border-b-2 flex justify-between"
          key={item.card.info.id}
        >
          <div>
            <div className="text-lg">{item.card.info.name} </div>
            <div>
              Price: ₹{" "}
              {(item.card.info.price
                ? item.card.info.price
                : item.card.info.defaultPrice) / 100}
            </div>
            <p className="font-light text-sm mb-2">
              {item.card.info.description}
            </p>
          </div>
          <div className="m-2 w-3/12 relative">
            <div className="absolute bottom-0.5 left-[0%] cursor-pointer">
              <button
                className="p-1 mx-5 rounded-lg bg-black text-white shadow-lg text-sm "
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              className="w-full "
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default RestaurantItemList;
