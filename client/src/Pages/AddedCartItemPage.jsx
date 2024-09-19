import React, { useState } from "react";
import Toplogo from "../Component/TOPLOGO/Toplogo";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import Footer from "../Component/Footer/Footer";

function AddedCartItemPage() {
  const [itemCount, setItemCount] = useState(0);
  const [product, setProduct] = useState();
  return (
    <>
      <div className="w-[100%] h-screen flex flex-col bg-[#D1E9F6] grid grid-rows-5">
        <div className="w-full h-16 border-b pb-5 ">
          <div className="flex items-center justify-between items-center border-b pb-2 border-black">
            <div>
              <p className="pl-4 text-3xl text-[#373A40] font-semibold cursor-pointer whitespace-nowrap font-bold sm:text-3xl">
                <span className="text-[]">Coding</span> <span>Alone</span>{" "}
                <span>Diaries</span>
              </p>
            </div>

            <div className="flex-1 mt-2 ml-5">
              <input
                type="search"
                placeholder="products"
                className="px-5 py-3 text-xl w-full"
              />
            </div>
            <div className="flex px-10"></div>
          </div>
          <div>
            <h1 className="text-center text-2xl mt-3 font-semibold">
              Shopping Cart
            </h1>
          </div>
          <div className="grid sm:grid-cols-[75%_25%] mt-10">
            <div className="bg-white min-h-[350px] mr-10 ml-10 rounded-xl border border-black"></div>
            <div className="bg-white rounded-xl mr-10 border border-black">
              <div className="text-center font-bold text-lg underline pt-4">
                Sub Total:
              </div>
              <div className="mt-10 flex flex-col justify-between">
                <div className="text-center font-semibold text-lg">
                  Subtotal (36 items): 13,432.38
                  <div></div>
                </div>
                <div className="flex w-full justify-center mt-2">
                  <button className="text-center font-semibold text-sm bg-yellow-300 px-5 py-1 border rounded-3xl hover:bg-yellow-400">
                    Proceed to buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddedCartItemPage;
