'use client'

import { useSession } from "next-auth/react";

export default function Welcome() {
    const { status, data: session } = useSession();
    return(
        <h2 className="productsTitle">
            Hi there, {status === "authenticated" ? session?.user?.name : ""}
        </h2>
    )
}