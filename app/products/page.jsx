"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Item from "@components/item";

const Users = () => {
  const [shopFilter, setShopFilter] = useState("All");
  const { status, data: session } = useSession();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("api/products", {
      cache: "no-store",
    });
    const data = await res.json()
    setProducts(await data)
    console.log(products)
  };
  
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productContainer mainpage container">
      <h2 className="productsTitle">
        Hi there, {status === "authenticated" ? session?.user?.name : ""}
      </h2>
      <div className="section">
        <div className="sortMenu">
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
          {products.map((product) => {
            <Item key={product._id} image={product.image} price={product.price} name={product.short_name} />
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
