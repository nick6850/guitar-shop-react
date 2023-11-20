import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { GuitarContext } from "../Context/GuitarContext";

function SharedLayout() {
  const { state } = useContext(GuitarContext);
  const location = useLocation();

  return (
    <div className="h-screen w-screen">
      <nav className="mr-3 mt-5 flex items-center  gap-2 text-2xl  ">
        <h1 className="ml-3 mr-auto flex-1 px-4 text-center  font-serif text-5xl font-light italic text-yellow-600 md:text-6xl">
          Nick's Guitars
        </h1>
        {location.pathname === "/cart" && (
          <NavLink to=".">
            <div className="transition duration-300 ease-linear hover:text-violet-800">
              <FaArrowLeft />
            </div>
          </NavLink>
        )}
        <NavLink to="/cart">
          <div className="mr-5 flex flex-col items-center transition duration-300 ease-linear hover:text-violet-800">
            <FaCartShopping />
            <span className="text-xs">
              Shopping cart ({state.items.length})
            </span>
          </div>
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default SharedLayout;
