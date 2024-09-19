import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignInButton from "../Component/Buttons/SignInButton";
import { CiShoppingCart } from "react-icons/ci";
import Card from "../Component/Card/Card";
import CopyRightText from "../Component/CopyRightText/CopyRightText";
import Footer from "../Component/Footer/Footer";

function Store() {
  const [itemCount, setItemCount] = useState(0);
  const [product, setProduct] = useState();

  return (
    <div className="h-[100%]">
      <div className="w-[100%] h-screen flex flex-col bg-[#D1E9F6] grid grid-rows-5">
        <div className="w-full h-16 border-b pb-5 ">
          <div className="flex items-center justify-between items-center">
            <Link to="/">
              {" "}
              <p className="pl-4 text-3xl text-[#373A40] font-semibold cursor-pointer whitespace-nowrap font-bold sm:text-3xl">
                <span className="text-[]">Coding</span> <span>Alone</span>{" "}
                <span>Diaries</span>
              </p>
            </Link>{" "}
            <div className="flex-1 mt-2 ml-5">
              <input
                type="search"
                placeholder="products"
                className="px-5 py-3 text-xl w-full"
              />
            </div>
            <div className="flex px-10">
              <span>
                <Link to="/addedCartItem">
                  <span className="text-3xl font-bold">
                    {<CiShoppingCart />}
                  </span>
                </Link>
              </span>
              {itemCount && itemCount > 0 ? (
                <span
                  val
                  style={{ color: "red", fontWeight: "bold" }}
                  className="no-underline hover:no-underline"
                >
                  {itemCount}
                </span>
              ) : null}
            </div>
          </div>
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Store;

