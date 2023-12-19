import { Suspense } from "react";
import ProductPageUI from "./productPage";
import Welcome from "./welcomeUser";

const Users = async () => {
  // REM TO CHANGE THE LINK ON PRODUCTION / HOSTING
  const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });
    const {data} = await res.json()
    const product = data
  return (
    <div className="productContainer mainpage container">
      {/* USE CAN USE THESE SUSPENSE TO LIKE UK WHILE LOADING THE PRODUCTS WE CAN SHOW THE SKELETON UI OF THE PRODUCT PAGE, SMTGH LIKE THAT */}
      <Suspense>
        <Welcome/>
      </Suspense>
      <Suspense>
        <ProductPageUI products={product} />
      </Suspense>
    </div>
  );
};

export default Users;
