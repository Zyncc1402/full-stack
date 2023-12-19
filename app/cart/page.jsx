"use client";

import React from "react";
import { useSession, signIn } from "next-auth/react";

const Cart = () => {
  const { status, data: session } = useSession();
  console.log(status)
  
  return (
    <div className="section container">
      <h1>Cart</h1>
      <div className="cartContainer flex">
        {status !== "authenticated" ? (
          <div className="emptyCart">
            <h2>You need to be logged in to view your Cart</h2>
            <button className="btn" onClick={signIn}>Login</button>
          </div>
        ) : (
          <>
            <h2>No items in Cart...</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
