"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const { status } = useSession();
  const [toggleMenu, setToggleMenu] = useState(false)
  const closeMenu = () => {
    setToggleMenu(false)
  };
  const openMenu = () => {
    setToggleMenu(true);
  };
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <Link href="/">
            <h2 className="logo">Shopping</h2>
          </Link>
          <ul
            className={
              toggleMenu ? "navMenu showNavMenu" : "navMenu hideNavMenu"
            }
          >
            <Link href="/">
              <li className="navList" onClick={closeMenu}>
                Home
              </li>
            </Link>
            <Link href="/products">
              <li className="navList" onClick={closeMenu}>
                Products
              </li>
            </Link>
            <Link href="/cart">
              <li className="navList" onClick={closeMenu}>
                Cart
              </li>
            </Link>
            {status === "authenticated" ? (
              <div className="signInOptions">
                <button
                  className="btn"
                  onClick={() => {
                    signOut();
                    closeMenu();
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/sign-in">
                <button className="btn" onClick={closeMenu}>
                  Login
                </button>
              </Link>
            )}
            <RxCross2 className="menuCloseIcon" onClick={closeMenu} />
          </ul>
          <BiMenuAltRight className="menuIcon" onClick={openMenu} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
