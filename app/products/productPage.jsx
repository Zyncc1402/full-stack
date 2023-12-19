'use client'
import Item from "@components/item";
import { useState } from "react";


export default function ProductPageUI({products}) {
    const [shopFilter, setShopFilter] = useState("All");
    return (
        <div className="section">
            <div className="sortMenu">
                <button
                    className="sortBtn button-29"
                    onClick={() => setShopFilter("All")}
                >
                    All
                </button>
                <button
                    className="sortBtn"
                    onClick={() => setShopFilter("Electronics")}
                >
                    Electronics
                </button>
                <button
                    className="sortBtn"
                    onClick={() => setShopFilter("Accessories")}
                >
                    Accessories
                </button>
            </div>
            <div className="productWrapper">
                {products.map((product) => {
                    // THIS RETURN IS ALSO A MUST!!
                    return (
                        <Item key={product._id} image={product.image} price={product.price} name={product.short_name} />
                    )
                })}
            </div>
        </div>
    )
}