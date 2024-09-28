import React from 'react'


export default function ShoeList({shoes, addToCart}) {

    return (
        <div className="shoe-list">
          {shoes.map((shoe) => (
            <div  key={shoe.id} className="shoe-item">
              <img className='image' src={shoe.img} alt={shoe.name} width={100} />
              <h3>{shoe.name}</h3>
              <p>${shoe.price}</p>
              <button className='btns' onClick={() => addToCart(shoe)}>Add to Cart</button>
            </div>
          ))}
        </div>
      );
    };
