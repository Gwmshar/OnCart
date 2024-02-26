import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function OnCartItem({ item, handleTrash }) {
  return (
    <div className="flex justify-center flex-col items-center bg-white min-h-64">
      <div className="flex justify-center items-end">
        <FontAwesomeIcon
          className="text-red-500"
          icon={faTrash}
          onClick={() => handleTrash(item.id)}
        />
      </div>
      <div className="mt-2">
        <img className="max-h-28" src={item.img} alt="" />
      </div>
      <h2 className="text-sm font-bold my-1">{item.name}</h2>
      <div className="text-xs font-semibold">
        <span className="text-yellow-400 mx-2">{item.discountPrice}</span>
        <span className="line-through mx-2">{item.originalPrice}</span>
      </div>
    </div>
  );
}
