import Image from "next/image";
import React from "react";
import { GrCart } from "react-icons/gr";

const Item = ({ image, name, price }) => {
  return (
    <div className="item">
      <div className="itemTop">
        <Image src={image} className="itemImg" alt="product-image" priority />
      </div>
      <div className="itemBottom">
        <h3 className="itemName">{name}</h3>
        <h4 className="itemPrice">₹ {price}</h4>
      </div>
      <GrCart className="itemCartIcon"/>
    </div>
  );
};

export default Item;