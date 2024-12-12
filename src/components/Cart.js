import React from 'react';

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  return (
    <div className="w-full lg:w-1/4 bg-gray-100 p-0 rounded-lg h-[88vh] overflow-y-auto shadow-md custom-scrollbar">
      <h2 className="text-xl font-normal mb-4 bg-yellow-400 text-gray-700 p-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 p-2">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center shadow-md p-2">
              <div className="flex items-center space-x-3">
                <img
                  src={item.image} 
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="font-medium text-md text-gray-700">{item.title}</p>
                  <p className="text-sm text-gray-500 font-semibold">x {item.quantity}</p>
                </div>
              </div>
              <div className="space-x-2 space-y-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-3 py-1 font-bold bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
                >
                  -
                </button>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-3 py-1 font-bold bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
