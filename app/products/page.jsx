"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Users = () => {
  const { status, data: session } = useSession();
  return (
    <>
      <div className="mainpage section container">
        <h1>Products</h1>
      </div>
    </>
  );
};

export default Users;
