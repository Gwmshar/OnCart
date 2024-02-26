import uuid from "react-uuid";
let items = [
  {
    id: uuid(),
    name: "Plasma TV",
    originalPrice: 1999,
    discountPrice: 999,
    img: "https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRWfGVufDB8fDB8fHww",
  },
  {
    id: uuid(),
    name: "T-shirt",
    originalPrice: 899,
    discountPrice: 399,
    img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww",
  },
  {
    id: uuid(),
    name: "PS5",
    originalPrice: 1599,
    discountPrice: 999,
    img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHM1fGVufDB8fDB8fHww",
  },
  {
    id: uuid(),
    name: "Fruit Basket",
    originalPrice: 999,
    discountPrice: 599,
    img: "https://images.unsplash.com/photo-1629905707362-03cf1a9f6e2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXQlMjBiYXNrZXR8ZW58MHx8MHx8fDA%3D",
  },
];

export default items;
