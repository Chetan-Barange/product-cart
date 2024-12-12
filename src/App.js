import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './index.css'; 

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity < 10) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          alert('Maximum quantity of 10 reached!');
          return prevCart;
        }
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = item.quantity + delta;
            if (newQuantity > 10) {
              alert('Maximum quantity of 10 reached!');
              return item;
            } else if (newQuantity < 1) {
              alert('Minimum quantity is 1!');
              return item;
            }
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (productId) => {
    if (window.confirm('Are you sure you want to remove this item from the cart?')) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }
  };

  return (
    <div className="App container mx-auto bg-lightYellow">
      <h1 className="text-center text-3xl bg-luxuryPremium-accent p-4 text-black font-normal">
        E-commerce Product Cart
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 p-4 bg-lightYellow">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default App;
