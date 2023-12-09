import React from "react";

const Item = ({ image, name, price }) => {
  return (
    <div className="item">
      <div className="itemTop">
        <img src={image} className="itemImg" />
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