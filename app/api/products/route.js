import Products from "@models/products";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export async function GET() {
    connectToDB();
    const res = await Products.find()
    return NextResponse.json({data: res})
}