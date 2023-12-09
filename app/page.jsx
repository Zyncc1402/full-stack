"use client";

import { useSession } from 'next-auth/react';
import React from 'react'

const Home = () => {
  const { status, data: session } = useSession();
  return (
    <>
      <div className="mainpage section container">
        <h1>Hi there, {status === "authenticated" ? session?.user?.name : "User"}</h1>
      </div>
    </>
  );
}

export default Home