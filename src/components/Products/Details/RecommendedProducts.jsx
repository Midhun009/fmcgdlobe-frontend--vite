// components/RecommendedProducts.js
import React from "react";

const RecommendedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      details: "Description of Product 1 with key features.",
      price: "$150",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Product 2",
      details: "Description of Product 2 with key features.",
      price: "$200",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      name: "Product 3",
      details: "Description of Product 3 with key features.",
      price: "$180",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 4,
      name: "Product 4",
      details: "Description of Product 4 with key features.",
      price: "$220",
      image: "https://via.placeholder.com/80",
    },
    
  ];

  return (
    <div className="recommended-products bg-white rounded py-4 px-4 mb-4">
      <h4 className="ft-bold mb-5">Recommended Products</h4>
      {products.map((product) => (
        <div
          className="recommended-product d-flex justify-content-between align-items-start mb-4"
          key={product.id}
        >
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            width="80" // Set a specific width for the image
          />
          <div className="flex-grow-1 ms-3">
            {" "}
            {/* Added flex-grow for proper spacing */}
            <h5 className="ft-medium">{product.name}</h5>
            <p className="mb-1">{product.details}</p> {/* Product details */}
            <h6 className="ft-bold theme-cl">{product.price}</h6>
          </div>
          <button className="btn theme-bg text-light rounded">Add</button>{" "}
          {/* Button styled like Buy Now */}
        </div>
      ))}
    </div>
  );
};

export default RecommendedProducts;
