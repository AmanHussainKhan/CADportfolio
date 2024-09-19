import { useState } from "react";
import pic from "../SmallProjects/ReduxAsset/pic2.png";
import { useDispatch } from "react-redux";
import { addToCart } from "./Store/Slice/cart-slice";
function ProductCard({ product }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  function checkLength(inputString) {
    return inputString.length > 17
      ? `${inputString.slice(0, 30)}...`
      : inputString;
  }

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  return (
    <>
      <div className="max-w-xs bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden">
        <div className="w-full h-48 bg-gray-200">
          <img
            src={product.image}
            alt="Product Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">
            {checkLength(product.title)}
          </h3>
          <h4 className="text-sm text-gray-500 mt-1">{product.price}</h4>

          {/* Dynamic layout for count and Add to Cart button */}
          <div
            className={`flex items-center ${
              count > 0 ? "justify-between" : "justify-center"
            } relative mt-4`}
          >
            {count > 0 && (
              <div className="flex items-center space-x-4">
                <button
                  onClick={decrement}
                  className="text-xl px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  -
                </button>
                <h3 className="text-gray-600">{count}</h3>
                <button
                  onClick={increment}
                  className="text-xl px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            )}

            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
