import { useState } from "react";
import Card from "./Card";
import items from "../data/items";

export default function Cards({ setOnCart, onCart }) {
  const [item, setItem] = useState(items);
  const handleCart = (id) => {
    item.forEach((a) => {
      if (a.id == id) {
        let temp = 0;
        onCart.forEach((b) => {
          if (b.id == id) {
            temp = 1;
          }
        });
        if (!temp) {
          window.alert("Item added to cart");
          setOnCart((e) => [a, ...e]);
        } else {
          window.alert("Item is already in cart");
        }
      }
    });
  };
  return (
    <div className="max-w-full flex justify-center items-center my-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 min-w-[90%]">
        {item.map((item) => {
          return <Card item={item} handleCart={handleCart} key={item.id} />;
        })}
      </div>
    </div>
  );
}
