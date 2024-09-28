import React, { useState } from 'react';
import ShoeList from './component/ShoeList';
import Navebar from './component/Navebar';
import Cart from './component/Cart';
import shoe1 from './asset/shoe1.jpeg';
import shoe3 from './asset/shoe3.jpeg';
import shoe4 from './asset/shoe4.jpeg';

const App = () => {
  const [cart, setCart] = useState([]);

  let shoes = [
    { id: 1, name: 'Nike Air', price: 100, img: shoe1, quantity:0},
    { id: 2, name: 'Adidas Boost', price: 120, img: shoe4,quantity:0 },
    { id: 3, name: 'Puma Pro', price: 90, img: shoe3,quantity:0 },
    { id: 4, name: 'Puma max Pro', price: 900, img: shoe3,quantity:0 }
  ];
  

  const addToCart = (shoe) => {
    const existingShoe = cart.find((item) => item.id === shoe.id);
    console.log(cart)
    if(!existingShoe){
      shoe.quantity=1;
      setCart( (prev) =>  [...cart,shoe]);
    }
  };

  const removeFromCart = (shoe) => {
    const existingShoe = cart.find((item) => item.id === shoe.id);
    if (existingShoe.quantity === 1) {
      setCart(cart.filter((item) => item.id !== shoe.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === shoe.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="container">
   
      <ShoeList shoes={shoes} addToCart={addToCart} />
      <Cart cart={cart} setcart={setCart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
