"use client";

import React, { useState } from "react";
import "boxicons";
import Item from "@components/item";
import Products from "@utils/Products";
import Electronics from "@utils/Electronics";
import Accessories from "@utils/Accessories";

const Users = () => {
  const [shopFilter, setShopFilter] = useState("All");
  return (
    <div className="productContainer mainpage section container">
      <h1 className="productsTitle">Products</h1>
      <div className="sortMenu">
        <box-icon name="filter-alt"></box-icon>
        <button
          className="sortBtn button-29"
          onClick={() => setShopFilter("All")}
        >
          All
        </button>
        <button
          className="sortBtn"
          onClick={() => setShopFilter("Electronics")}
        >
          Electronics
        </button>
        <button
          className="sortBtn"
          onClick={() => setShopFilter("Accessories")}
        >
          Accessories
        </button>
      </div>
      <div className="productWrapper section">
        {(() => {
          if (shopFilter === "All") {
            return Products.map((product, i) => {
              return (
                <Item
                  key={i}
                  image={product.image}
                  name={product.shortName}
                  price={product.price}
                />
              );
            });
          } else if (shopFilter === "Electronics") {
            return Electronics.map((product, i) => {
              return (
                <Item
                  key={i}
                  image={product.image}
                  name={product.shortName}
                  price={product.price}
                />
              );
            });
          } else {
            return Accessories.map((product, i) => {
              return (
                <Item
                  key={i}
                  image={product.image}
                  name={product.shortName}
                  price={product.price}
                />
              );
            });
          }
        })()}
      </div>
    </div>
  );
};

export default Users;
