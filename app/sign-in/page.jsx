"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Signin = () => {
    const { status } = useSession;
    

    useEffect(() => {
    if (status === "authenticated") {
      console.log("yes");
    }
    }, []);
  return (
    <div className="home container">
      <div className="loginBox">
        <h2>Login</h2>
        <form action="" className="loginForm">
          <input type="email" name="email" placeholder="Email" className="loginInput"/>
          <input type="password" name="password" placeholder="Password" className="loginInput"/>
          <button type="submit" className="loginBtn btn">Login</button>
        </form>
        <h3>Or</h3>
        <div onClick={() => signIn("google")} className="googleBox">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            }
            alt="google-logo"
            width={30}
            height={30}
          ></Image>
          <button className="googleBtn">Login with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
