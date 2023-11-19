import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function SharedLayout() {
  return (
    <div className="h-screen w-screen">
      <nav className="mr-3 mt-5 flex justify-end gap-2  text-2xl  ">
        <NavLink to=".">
          <div className="transition duration-300 ease-linear hover:text-violet-800">
            <FaArrowLeft />
          </div>
        </NavLink>
        <NavLink to="/cart">
          <div className="mr-5 transition duration-300 ease-linear hover:text-violet-800">
            <FaCartShopping />
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
