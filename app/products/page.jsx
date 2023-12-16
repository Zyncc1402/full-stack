"use client";

<<<<<<< Updated upstream
import React, { useState } from "react";
import { useSession } from "next-auth/react";
=======
import React, { useContext, useState } from "react";
>>>>>>> Stashed changes
import Item from "@components/item";
import Products from "@utils/Products";
import Electronics from "@utils/Electronics";
import Accessories from "@utils/Accessories";
<<<<<<< Updated upstream
import { BsFilterLeft } from "react-icons/bs";

const Users = () => {
  const [shopFilter, setShopFilter] = useState("All");
  const { status, data: session } = useSession();
  return (
    <div className="productContainer mainpage container">
      <h1 className="productsTitle">
        Hi there, {status === "authenticated" ? session?.user?.name : "User"}
      </h1>
      <div className="section">
        <div className="sortMenu">
          <BsFilterLeft className="filterIcon"/>
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
        <div className="productWrapper">
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
=======
import { CartProvider } from "@context/CartContext";

const Users = () => {
  const [shopFilter, setShopFilter] = useState("All");
  const { number } = useContext(CartProvider);
  console.log(number);
  return (
    <div className="productContainer container">
      <h1 className="productsTitle">Products</h1>
      <div className="sortMenu">
        <button className="sortBtn" onClick={() => setShopFilter("All")}>
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
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default Users;
