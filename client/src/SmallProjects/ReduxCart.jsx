import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import ReduxCard from "./ReduxCard";

function ReduxCart() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log("data", data);
    if (data) {
      setProducts(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <>
      <div className="flex w-[100vw] bg-yellow-100 h-16 items-center border-b justify-between">
        <h1 className="text-3xl font-bold text-center pl-3">
          <span className="hover:cursor-pointer text-[#373A40]">
            <Link to="/">Coding Alone Diaries</Link>
          </span>
        </h1>
        <div className="flex grow relative items-center">
          <input
            type="search"
            className="ml-20 grow mr-20 h-[2.5rem] border pl-10 pr-2"
            placeholder="Search for products..."
          />
          <FaSearch className="absolute left-24 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <div className="flex items-center relative">
            <span className="text-3xl pr-8 hover:cursor-pointer relative">
              <Link to="/reduxCartTotal">
                <CiShoppingCart />
              </Link>
            </span>
            <span className="absolute bottom-4 right-7 p-1 font-bold text-red-500">
              {}
            </span>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <p>Loading products...</p>
        </div>
      ) : (
        <div className="grid w-[100%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          {products.map((product) => (
            <ReduxCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default ReduxCart;
