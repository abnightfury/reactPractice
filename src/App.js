import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";

/**
 * Header
 *  --LOGO
 *  -- nav Links
 * Body 
 *  -- Search Bar
 *  -- Restaurant Container
 *  -- Restaurant Cards 
 *     - img
 *     - Name of restaurant, star rating, cusines, delveryname
 * Footer
 *  -- Copyright
 *  --Links
 */

const AppLayout = () => {
  return (
  <div className="app">
    <Header/>
    <Body/>
  </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <AppLayout />
  </div>
);
