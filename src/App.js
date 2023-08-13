import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import MenuRes from "./components/MenuRes";
// import Grocery from "./components/Grocery";



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
 const Grocery = lazy(()=>import("./components/Grocery" ))


 
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h1>loading....</h1>}><Grocery/></Suspense> ,
      },
      {
        path: "/restaurants/:resId",
        element: <MenuRes/>,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
