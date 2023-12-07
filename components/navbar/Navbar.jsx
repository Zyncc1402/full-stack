"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProvider();
  }, []);

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
            {session?.user ? (
              <button
                className="btn"
                onClick={() => {
                  signOut();
                }}
              >
                Sign Out
              </button>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      key={provider.name}
                      className="btn"
                      onClick={() => signIn(provider.id)}
                    >
                      Sign in
                    </button>
                  ))}
              </>
            )}
            {session?.user ? (
              <Image src={session?.user.picture} width={50} height={50}></Image>
            ) : (
              <></>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
