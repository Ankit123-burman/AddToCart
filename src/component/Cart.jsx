import React, { useState } from 'react';

const Cart = ({ cart,setcart, removeFromCart }) => {
  const [quan, setQuan] = useState({});
  
  const total = cart.reduce((acc, item) => {
    if (item) {
      return acc + item.price * (quan[item.id] || item.quantity);
    }
    return acc;
  }, 0);


  const increment = (itemId) => {
 
      cart.map((item) => {
        if (item.id === itemId) {
          if(item.quantity <= 10){
           item.quantity+=1;
           setcart([...cart]);
          }else{
            alert("You can't add more than 10 items");
          }
        } else {
          return item;
        }
      })
  };
  const decrement = (itemId) => {
 
      cart.map((item) => {
        if (item.id === itemId) {
          if(item.quantity  > 1){
           item.quantity-=1;
           setcart([...cart]);
          }else{
            alert("You can't add less than 1 item");
          }
        } else {
          return item;
        }
      })
  };
  


  const handleRemoveItem = (item) => {
    removeFromCart(item);
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[item.id];
      return newQuantities;
    });
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div className='bt'>
              <button onClick={() => increment(item.id, 1)}>+</button><span></span>
              <button onClick={() => decrement(item.id, -1)}>-</button>
            </div>
            <button className='btn' onClick={() => handleRemoveItem(item)}>
              Remove
            </button>
          </div>
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
