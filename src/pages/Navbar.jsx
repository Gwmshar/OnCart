import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <>
      <div className="flex bg-[#2983D6] min-h-24 justify-between items-center sticky top-0">
        <Link to="/">
          <div className="text-white text-xl md:text-2xl font-bold ml-4 md:ml-7">
            On<span className="text-red-600">Cart</span>
          </div>
        </Link>
        <div className="w-2/4 flex items-center justify-center">
          <input
            className="w-3/4 py-1 md:py-3 px-1"
            type="text"
            placeholder="Search for the items ..."
          />
          <button className="w-1/4 py-1 md:py-3 bg-[#312626] text-white">
            Search
          </button>
        </div>
        <div className="flex mr-3 md:mr-7 item-center gap-4 md:gap-7">
          <Link to="/mycart">
            <FontAwesomeIcon
              className="text-xl md:text-3xl"
              icon={faCartShopping}
            />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
