import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import { add } from "../../Redux/Cartslice";
import { useDispatch } from "react-redux";

const Card = () => {
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    const fetchProductAPIData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProductData(res.data);
      } catch (err) {
        console.log("api fetch error", err);
      }
    };
    fetchProductAPIData();
  }, []);

  function checkLength(inputString) {
    return inputString.length > 17
      ? `${inputString.slice(0, 16)}...`
      : inputString;
  }

  return (
    <div className="flex flex-wrap justify-center mt-10">
      {productData.map((element, index) => (
        <div
          key={index}
          className="m-4 w-80 h-96 bg-gray-200 border border-black rounded-lg overflow-hidden flex flex-col"
        >
          <div
            className="flex-wrap"
            style={{ width: "320px", height: "220px" }}
          >
            <img
              src={element.image}
              alt={element.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col justify-between">
            <h1 className="text-lg font-semibold mb-2">
              {checkLength(element.title)}
            </h1>
            <p className="text-lg font-bold">{`Rs.${element.price}/-`}</p>
            <div className="flex justify-between mt-4">
              <FaRegHeart className="text-2xl hover:cursor-pointer hover:text-red-500" />
              <button
                className="bg-green-400 px-4 py-2 rounded-md"
                onClick={() => handleAdd(element)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
