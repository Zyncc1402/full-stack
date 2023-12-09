"use client";

import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const { status } = useSession();

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <Link href="/">
            <h2 className="logo">Shopping</h2>
          </Link>
          <ul className="navMenu">
            <Link href="/">
              <li className="navList">Home</li>
            </Link>
            <Link href="/products">
              <li className="navList">Products</li>
            </Link>
            <Link href="/cart">
              <li className="navList">Cart</li>
            </Link>
            {status === "authenticated" ? (
              <div className="signInOptions">
                <button className="btn" onClick={() => signOut()}>
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/sign-in">
                <button className="btn">Login</button>
              </Link>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
