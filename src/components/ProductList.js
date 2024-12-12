import React, { useState } from 'react';

const ProductList = ({ products, addToCart }) => {
  const [tooltipProductId, setTooltipProductId] = useState(null); 

  const handleAddToCart = (product) => {
    addToCart(product); 
    setTooltipProductId(product.id); 

    setTimeout(() => {
      setTooltipProductId(null);
    }, 2000);
  };

  return (
    <div className="w-full lg:w-3/4 h-[88vh] overflow-y-auto custom-scrollbar">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="font-bold text-md mb-2">{product.title}</h3>
            <p className="text-sm text-gray-700 truncate">{product.description}</p>
            <p className="productprice font-bold py-2">Price: ${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-full py-2 bg-yellow-300 text-black rounded-lg hover:bg-yellow-400 relative"
            >
              Add to Cart
              {tooltipProductId === product.id && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded shadow-lg">
                  Added
                </span>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
