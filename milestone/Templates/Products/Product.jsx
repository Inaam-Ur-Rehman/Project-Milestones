import React from "react";

function Product({ name, price, description, img }) {
  return (
    <div>
      <div className="bg-white shadow-xl rounded-lg p-4">
        <img
          src={img}
          alt="Product 1"
          className="w-full h-64 object-cover mb-4"
        />
        <h2 className="text-lg font-bold mb-2">Product 1</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <p className="text-lg font-bold mb-4">{price}</p>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
