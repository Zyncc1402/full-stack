"use client";

import { useSession } from 'next-auth/react';
import React from 'react'

const Home = () => {
  const { status, data: session } = useSession();
  return (
    <>
      <div className="mainpage section container">
        <h1>Home</h1>
      </div>
    </>
  );
}

export default Home