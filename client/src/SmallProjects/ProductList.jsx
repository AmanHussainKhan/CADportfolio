import React from "react";
import ReduxCard from "./ReduxCard";

function ProductList() {
  const products = [
    {
      id: 1,
      title: "Product 1",
      subtitle: "Best quality product",
      image: "https://via.placeholder.com/150",
      price: 29.99,
    },
    {
      id: 2,
      title: "Product 2",
      subtitle: "Durable and long-lasting",
      image: "https://via.placeholder.com/150",
      price: 19.99,
    },
    {
      id: 3,
      title: "Product 3",
      subtitle: "Limited edition",
      image: "https://via.placeholder.com/150",
      price: 49.99,
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {products.map((product) => (
        <ReduxCard
          key={product.id}
          title={product.title}
          subtitle={product.subtitle}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
