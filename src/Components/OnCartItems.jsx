import React from "react";
import uuid from "react-uuid";

import OnCartItem from "./OnCartItem";

export default function OnCartItems({ onCart, setOnCart }) {
  const handleTrash = (id) => {
    let temp = onCart.filter((a) => a.id != id);
    setOnCart(temp);
  };
  return (
    <>
      {onCart != 0 ? (
        <div className="max-w-full flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 min-w-[90%]">
            {onCart.map((a) => {
              return (
                <OnCartItem key={uuid()} item={a} handleTrash={handleTrash} />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center text-2xl font-bold mt-5">
          There is no items
        </div>
      )}
    </>
  );
}
