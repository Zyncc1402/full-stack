"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Users = () => {
  const { status, data: session } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <div className="home">
          <Image
            className="profilePicPage"
            src={session?.user?.image}
            width={50}
            height={50}
            alt="profile picture"
          ></Image>
          <h1>Name: {session?.user?.name}</h1>
          <br />
          <h1>Email: {session?.user?.email}</h1>
        </div>
      ) : (
        <div className="home">
          <h1>Not Logged In</h1>
        </div>
      )}
    </>
  );
};

export default Users;
