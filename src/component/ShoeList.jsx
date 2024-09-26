import React from 'react'

export default function ShoeList({shoes, addToCart}) {
    return (
        <div className="shoe-list">
          <h2>Available Shoes</h2>
          {shoes.map((shoe) => (
            <div key={shoe.id} className="shoe-item">
              <img src={shoe.img} alt={shoe.name} width={100} />
              <h3>{shoe.name}</h3>
              <p>${shoe.price}</p>
              <button onClick={() => addToCart(shoe)}>Add to Cart</button>
            </div>
          ))}
        </div>
      );
    };
