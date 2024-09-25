import React, { useState } from "react";

function KitneKa() {
  const [unitType, setUnitType] = useState("kg");
  const [pricePerUnit, setPricePerUnit] = useState(0);
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState(1); // New state for quantity
  const [amountType, setAmountType] = useState("quantity"); // Either 'quantity' or 'price'
  const [finalPrice, setFinalPrice] = useState(null);

  const handleCalculate = () => {
    let calculatedPrice = 0;

    if (amountType === "quantity") {
      if (unitType === "kg" || unitType === "liter") {
        calculatedPrice = pricePerUnit * (amount / 1000) * quantity; // for grams to kg or ml to liter
      } else {
        calculatedPrice = pricePerUnit * amount * quantity; // for dozen
      }
    } else {
      calculatedPrice = (amount / pricePerUnit) * quantity;
    }

    setFinalPrice(calculatedPrice);
  };

  return (
    <div className="bg-green-200 p-4 mt-20 w-fit">
      <h1>Goods Unit Converter</h1>
      <div>
        <label>Choose Unit Type: </label>
        <select value={unitType} onChange={(e) => setUnitType(e.target.value)}>
          <option value="kg">Kg</option>
          <option value="liter">Liter</option>
          <option value="dozen">Dozen</option>
        </select>
      </div>
      <div>
        <label>Price per Unit (Kg/Liter/Dozen): </label>
        <input
          type="number"
          value={pricePerUnit}
          onChange={(e) => setPricePerUnit(e.target.value)}
        />
      </div>

      <div>
        <label>
          Enter Amount in{" "}
          {amountType === "quantity"
            ? "Quantity (Kg/Liters/Dozen or g/ml)"
            : "Rs"}
          :{" "}
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div>
        <label>Quantity to Buy: </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
      </div>

      <div>
        <label>Choose Amount Type: </label>
        <select
          value={amountType}
          onChange={(e) => setAmountType(e.target.value)}
        >
          <option value="quantity">Quantity</option>
          <option value="price">Price in Rs</option>
        </select>
      </div>

      <button onClick={handleCalculate}>Calculate</button>

      {finalPrice !== null && (
        <div>
          <h3>
            Final Price is:{finalPrice}{" "}
            {amountType === "quantity"
              ? "Rs"
              : unitType === "kg"
              ? "Kg"
              : unitType === "liter"
              ? "Liters"
              : "Dozen"} 
          </h3>
        </div>
      )}
    </div>
  );
}

export default KitneKa;
