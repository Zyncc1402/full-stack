import Image from "next/image";
import React from "react";
import { GrCart } from "react-icons/gr";
import { CartProvider } from "@context/CartContext";

const Item = ({ image, name, price }) => {
  const { addToCart } = useContext(CartProvider);
  return (
    <div className="item">
      <div className="itemTop">
        <Image src={image} className="itemImg" alt="product-image" priority />
      </div>
      <div className="itemBottom">
        <h3 className="itemName">{name}</h3>
        <h4 className="itemPrice">₹ {price}</h4>
      </div>
      <GrCart className="itemCartIcon" onClick={() => addToCart(name, price)} />
    </div>
  );
};

export default Item;