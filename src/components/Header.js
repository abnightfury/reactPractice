import logofood2 from "../../img/logofood.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="p-1 shadow-lg ">
      <div className="m-3 flex justify-between">
        <div className="logo-container">
          <img className="w-24" src={logofood2} />
        </div>
        <div className="nav-items ">
          <ul className="flex p-4 m-5 items-baseline m-0 p-0">
            <li className="p-4 hover:text-red-600">
              <Link to="/"> Home</Link>{" "}
            </li>
            <li className="p-4 hover:text-red-600">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 hover:text-red-600">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="p-4 hover:text-red-600">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="p-4 hover:text-red-600">Cart</li>
            <button
              className="rounded-full pr-10 pl-10 pt-0 pb-0 hover:bg-red-900 h-11 shadow-sm bg-red-500 text-white"
              onClick={() =>
                btnName.toLowerCase() === "login"
                  ? setBtnName("Logout")
                  : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
