import Image from "next/image";
import React from "react";

const Item = ({ image, name, price }) => {
  return (
    <div className="item">
      <div className="itemTop">
        <Image src={image} className="itemImg" alt="product-image" priority/>
      </div>
      <div className="itemBottom">
        <h3 className="itemName">{name}</h3>
        <h4 className="itemPrice">₹ {price}</h4>
      </div>
      {/* <box-icon name="cart" className="bx-cart"></box-icon> */}
    </div>
  );
};

export default Item;