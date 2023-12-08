"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <Link href="/">
            <h2 className="logo">Next.js</h2>
          </Link>
          <ul className="navMenu">
            <Link href="/">
              <li className="navList">Home</li>
            </Link>
            <Link href="/users">
              <li className="navList">Users</li>
            </Link>
            <Link href="">
              <li className="navList">Cart</li>
            </Link>
          </ul>
          <div>
            {status === "authenticated" ? (
              <div className="signInOptions">
                <button className="btn" onClick={() => signOut()}>
                  Sign Out
                </button>
                <Image
                  className="profilePic"
                  src={session?.user?.image}
                  width={50}
                  height={50}
                  alt="profile picture"
                ></Image>
              </div>
            ) : (
              <button className="btn" onClick={() => signIn('google')}>
                Sign in
              </button>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
