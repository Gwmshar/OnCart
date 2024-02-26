import React from "react";
import OnCartItems from "../Components/OnCartItems";

export default function Mycart({ onCart, setOnCart }) {
  let totalItems = onCart.length;
  let price = 0;
  onCart.forEach((a) => {
    price += a.discountPrice;
  });
  return (
    <>
      <div className="flex justify-around items-center my-5">
        <p className="text-2xl font-bold">Total Items : {totalItems}</p>
        <p className="text-2xl font-bold">Total price : ${price}</p>
      </div>
      <div>
        <OnCartItems onCart={onCart} setOnCart={setOnCart} />
      </div>
    </>
  );
}
