import React from "react";
import Cards from "../Components/Cards";

export default function Home({ setOnCart, onCart }) {
  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <img
          className="min-w-full xl:min-w-[95%] h-96"
          src="https://images.unsplash.com/photo-1594968973184-9040a5a79963?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="text-center text-2xl mt-2">Today's Deals</div>
      <div className="flex justify-center items-center">
        <div className="bg-black w-[90%] h-1 my-4"></div>
      </div>
      <Cards setOnCart={setOnCart} onCart={onCart} />
    </>
  );
}
